import styled from 'styled-components';

// Label wraps Checkbox and Text
export const FilterLabelStyled = styled.label`
  cursor: pointer;

  padding: 9px 15px 9px 12px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;

  background: transparent;
  border: 2px solid var(--colors-spindle);

  transition: background-color 0.1s;
  user-select: none;

  ${({ theme }) => theme.typography.bodySmallMedium}
  line-height: 22px;

  &:hover {
    background: var(--colors-linkWater);
  }
  &:active {
    box-shadow: 0px 0px 0px 2px var(--colors-irisBlue);
  }
`;

export const FilterTextStyled = styled.span``;

export const FilterCheckboxStyled = styled.input`
  appearance: none;
  margin-left: 12px;

  border-radius: 2px;
  width: 14px;
  height: 14px;

  background-color: transparent;
  border: 1px solid var(--colors-spindle);

  transition: border-color 0.1s, background-color 0.1s, outline-color 0.1s;
  position: relative;
  outline: solid 2px transparent;
  outline-offset: 2px;
  cursor: pointer;

  /* Tick */
  &::after {
    content: '';

    display: block;
    width: 8px;
    height: 8px;
    border-radius: 2px;

    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: auto;

    background-color: transparent;
    transition: background-color 0.1s;
  }

  /* States */
  ${FilterLabelStyled}:hover & {
    border-color: var(--colors-irisBlue);
  }
  &:checked {
    border-color: var(--colors-irisBlue);
    background-color: var(--colors-blank);
  }
  &:checked::after {
    background-color: var(--colors-irisBlue);
  }
  &:focus-visible {
    outline-color: var(--colors-irisBlue);
  }
`;
