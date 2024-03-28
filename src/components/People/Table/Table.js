import { TableCell, TableRow, TableThCell } from 'components/Table';
import { formatSalary } from './salary';
import {
  PeopleTableContainerStyled,
  PeopleTableTableStyled,
  PeopleTableLoadingStyled,
} from './Table.styled';
import LoadingLogo from 'components/LoadingLogo';
import Feedback from 'components/Feedback';
import { ButtonIcon } from 'components/Button/ButtonIcon';
import { ReactComponent as IconPencil } from 'theme/icons/edit-pencil.svg';

const EMPLOYMENT_MAP = {
  employee: 'Employee',
  contractor: 'Contractor',
};

export function PeopleTable({ people, isLoading, error, onEdit }) {
  if (error) {
    return (
      <PeopleTableContainerStyled>
        <Feedback type="error">
          There was an error loading employees: {error}. Please try again later.
        </Feedback>
      </PeopleTableContainerStyled>
    );
  }
  return (
    <PeopleTableContainerStyled>
      <PeopleTableTableStyled>
        <thead>
          <tr>
            <TableThCell>Name</TableThCell>
            <TableThCell>Role</TableThCell>
            <TableThCell>Type</TableThCell>
            <TableThCell>Country</TableThCell>
            <TableThCell align="right">Salary</TableThCell>
            <TableThCell></TableThCell>
          </tr>
        </thead>
        <tbody>
          {people.map((person) => (
            <TableRow key={person.id}>
              <TableCell>{person.name}</TableCell>
              <TableCell>{person.jobTitle}</TableCell>
              <TableCell>{EMPLOYMENT_MAP[person.employment] ?? 'Unknown'}</TableCell>
              <TableCell>{person.country}</TableCell>
              <TableCell align="right">{formatSalary(person.currency, person.salary)}</TableCell>
              <TableCell align="right">
                <ButtonIcon
                  icon={<IconPencil />}
                  data-testid="edit-person"
                  onClick={() => onEdit(person)}
                  tabIndex="-1"
                >
                  Edit
                </ButtonIcon>
              </TableCell>
            </TableRow>
          ))}
        </tbody>
      </PeopleTableTableStyled>
      {isLoading && (
        <PeopleTableLoadingStyled>
          <LoadingLogo />
        </PeopleTableLoadingStyled>
      )}
    </PeopleTableContainerStyled>
  );
}
