import styled from 'styled-components';

export const PeopleHeaderStyled = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;

  margin: -8px;
  & > * {
    padding: 8px;
  }
`;

export const PeopleHeaderPrimaryStyled = styled.div`
  display: flex;
  align-items: baseline;
`;

export const PeopleHeaderCountStyled = styled.span`
  ${({ theme }) => theme.typography.bodyCaption}
  margin-left: 8px;
  color: var(--colors-lynch);
`;
