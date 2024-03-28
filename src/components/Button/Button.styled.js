import styled, { css, keyframes } from 'styled-components';

const getStylesByVariant = (variant = '') => {
  switch (variant) {
    case 'primary': {
      return css`
        color: var(--colors-blank);
        background: var(--colors-irisBlue);
        box-shadow: var(--shadows-buttonsIris);

        &:focus-visible {
          outline-color: var(--colors-irisBlue);
        }
        &:hover {
          background: #6447ff;
        }
        &:active {
          background: var(--colors-irisBlue);
          box-shadow: 0px 0px 0px 3px var(--colors-irisBlue-lighter);
        }
      `;
    }

    case 'secondary': {
      return css`
        background: var(--colors-blank);
        color: var(--colors-irisBlue);
        border: 2px solid rgba(98, 77, 227, 0.45);

        &:focus-visible {
          border-width: 4px;
        }

        &:hover {
          background: var(--colors-selago);
        }
      `;
    }
    default: {
      return '';
    }
  }
};

const commonStyles = css`
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  min-height: 40px;
  padding: 10px 24px;
  border: none;
  border-radius: 45px;

  outline: solid 2px transparent;
  outline-offset: 2px;

  ${({ theme }) => theme.typography.bodySmallMedium}

  text-align: center;
  text-decoration: none;

  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.1s, outline-color 0.1s;
`;

export const ButtonStyled = styled.button`
  ${commonStyles}
  ${({ $variant }) => getStylesByVariant($variant)}

  ${({ $isLoading }) =>
    $isLoading &&
    css`
      pointer-events: none;
      color: transparent;
    `}
`;

export const IconButtonStyled = styled.button`
  ${commonStyles}

  color: var(--colors-irisBlue);
  background: none;
  outline: solid 2px transparent;
  outline-offset: 2px;

  text-align: center;
  text-decoration: none;

  cursor: pointer;
  user-select: none;
  transition: box-shadow 0.1s, outline-color 0.1s;

  &:focus-visible {
    background: var(--colors-selago);
  }
  &:hover {
    color: var(--colors-royalPurple);
  }
`;

export const ButtonIconStyled = styled.span`
  margin-right: 8px;
  svg {
    color: inherit;
    width: 20px;
    height: 20px;
    display: block;
  }
  path {
    fill: currentColor;
  }
`;

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const LoadingAddon = styled.span`
  position: absolute;
  display: block;
  width: 1em;
  height: 1em;
  top: calc(50% - 0.5em);
  left: calc(50% - 0.5em);
  border-width: 2px;
  border-color: var(--colors-blank);
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-style: solid;
  border-radius: 50%;
  animation: ${spin} 0.45s linear infinite;
`;
