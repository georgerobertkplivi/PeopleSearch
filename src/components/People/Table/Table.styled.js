import styled from 'styled-components';
import { Table } from 'components/Table';

export const PeopleTableContainerStyled = styled.div`
  position: relative;
  overflow: auto;
  min-height: 300px;
`;

export const PeopleTableTableStyled = styled(Table)`
  min-width: 900px;
`;

export const PeopleTableLoadingStyled = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 120px;

  background: rgba(255, 255, 255, 0.8);
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
