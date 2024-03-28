import styled from 'styled-components';

export const SearchFieldContainerStyled = styled.div`
  position: relative;
  width: fit-content;
`;

export const SearchFieldIconStyled = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 12px 0 16px;
  path {
    fill: var(--colors-lynch);
  }
`;

export const SearchFieldInputStyled = styled.input`
  border-radius: 25px;
  padding: 0 16px 0 48px;
  height: 34px;
  width: 200px;

  background: transparent;
  border: 1px solid var(--colors-lynch);
  color: var(--colors-darkBlue);
  &::placeholder {
    color: var(--colors-lynch);
  }

  ${({ theme }) => theme.typography.bodySmall}
  line-height: 18px;

  transition: box-shadow 0.1s, border-color 0.1s, background-color 0.1s;

  &:hover {
    cursor: pointer;
  }

  :not(:placeholder-shown),
  &:hover,
  &:focus {
    background: rgba(234, 240, 246, 0.45);
  }
  &:focus {
    outline: none;
  }
`;
