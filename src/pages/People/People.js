import styled from 'styled-components';
import { useEffect, useState } from 'react';
import { PeopleHeader } from 'components/People/Header';
import { PeopleToolbar } from 'components/People/Toolbar';
import { PeopleTable } from 'components/People/Table';
import { AddEditMemberModal } from 'components/People/EditPersonModal';
import { Card, CardBody } from 'components/Card';
import { PeopleTableWrapper } from './People.styled';
import { fetchPeople, updatePerson, createPerson } from 'fetch/people';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { toast } from 'components/Toast';

const Container = styled.main`
  margin: 40px auto;
  width: 100%;
  max-width: calc(var(--layout-width) + 32px);
  padding: 0 16px;
`;

const PeopleCard = styled(Card)`
  --spacer: 24px 16px 32px;
  margin-top: 32px;
`;

const initialModalState = { isOpen: false, person: null, variant: null };

export default function People() {
  const [{ isOpen, person, variant }, setModalPersonState] = useState(initialModalState);
  const [nameFilter, setNameFilter] = useState('');
  const [typeFilter, setTypeFilter] = useState([]);
  const [debouncedSearch, setDebouncedSearch] = useState(() => ({ nameFilter, typeFilter }));

  const { data: people = [], isLoading, error, refetch } = useQuery({
    queryKey: ['people', debouncedSearch],
    queryFn: async () => fetchPeople(debouncedSearch),
  });

  const editMemberMutation = useMutation((params) => updatePerson(params));
  const createMemberMutation = useMutation((params) => createPerson(params));
  const queryClient = useQueryClient();

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setDebouncedSearch({ nameFilter, typeFilter });
    }, 200);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [nameFilter, typeFilter]);

  function handleEditMember({ jobTitle, ...values }) {
    editMemberMutation.mutate(
      { id: person.id, jobTitle, ...values },
      {
        onSuccess: () => {
          toast.success('You’ve successfully edited a member.');
          setModalPersonState(initialModalState);
          queryClient.setQueryData(
            ['people', debouncedSearch],
            people.map((cachedPerson) =>
              cachedPerson.id === person.id ? { ...cachedPerson, ...values } : cachedPerson
            )
          );
        },
      }
    );
  }

  function handleCreateMember(values) {
    createMemberMutation.mutate(
      { values },
      {
        onSuccess: () => {
          toast.success('You’ve successfully added a member.');
          refetch();
          setModalPersonState(initialModalState);
        },
      }
    );
  }

  const propsForModal = {
    create: {
      isLoading: createMemberMutation.isLoading,
      error: createMemberMutation.error,
      headerTitle: 'Add member',
      onSubmit: handleCreateMember,
    },
    edit: {
      isLoading: editMemberMutation.isLoading,
      error: editMemberMutation.error,
      headerTitle: 'Edit member',
      onSubmit: handleEditMember,
    },
  };

  const { onSubmit, isLoading: isLoadingMutation, ...modalProps } = propsForModal[variant] || {};

  return (
    <>
      <Container>
        <PeopleHeader
          employeeCount={people?.length ?? null}
          onClick={() => setModalPersonState({ person: null, isOpen: true, variant: 'create' })}
        />
        <PeopleCard>
          <CardBody>
            <PeopleToolbar
              nameFilter={nameFilter}
              setNameFilter={setNameFilter}
              typeFilter={typeFilter}
              setTypeFilter={setTypeFilter}
            />
            <PeopleTableWrapper>
              <PeopleTable
                people={people}
                isLoading={isLoading}
                error={error}
                onEdit={(personValues) => {
                  setModalPersonState({ person: personValues, isOpen: true, variant: 'edit' });
                }}
              />
            </PeopleTableWrapper>
          </CardBody>
        </PeopleCard>
      </Container>
      <AddEditMemberModal
        person={person}
        onSubmit={onSubmit}
        modalProps={{
          isOpen: isOpen,
          onCancel: () => setModalPersonState(initialModalState),
          onDismiss: () => setModalPersonState(initialModalState),
          confirmLoading: isLoadingMutation,
          ...modalProps,
        }}
      />
    </>
  );
}
