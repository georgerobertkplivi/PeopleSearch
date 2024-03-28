import styled, { createGlobalStyle, css } from 'styled-components';

import Text from 'components/Text';

const toastCSS = css`
  body .toast {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 16px 40px 16px 16px;
    align-items: flex-start;
    position: relative;

    background: var(--colors-blank);
    box-shadow: 0px 5px 44px rgba(21, 39, 69, 0.15);
    box-sizing: unset;
    border-radius: 8px;
    min-width: 345px;

    div[role='status'] {
      font-weight: 400;
      font-size: 14px;
      line-height: 1.57;
      margin: 0;
      justify-content: flex-start;
      flex-direction: column;
      margin-left: 12px;
    }

    svg {
      margin-top: 2px;
      flex-shrink: 0;
    }

    &.toast-success {
      > svg {
        fill: #01b0bb;
      }
    }
  }
`;

export const ToastCSS = createGlobalStyle`${toastCSS}`;

export const ButtonClose = styled.button`
  all: initial;
  box-sizing: border-box;
  position: relative;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 14px;
  right: 14px;
  &::before,
  &::after {
    position: absolute;
    content: '';
    width: 18px;
    height: 2px;
    border-radius: 2px;
    background-color: var(--colors-bayoux);
  }
  &::before {
    transform: rotate(45deg);
  }
  &::after {
    transform: rotate(-45deg);
  }
  &:hover {
    opacity: 0.7;
    cursor: pointer;
  }
`;

export const ToastTitle = styled(Text).attrs({ variant: 'bodySMMedium', color: 'darkBlue' })``;

export const ToasterClose = styled.button``;
