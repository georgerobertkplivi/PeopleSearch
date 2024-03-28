import styled from 'styled-components';
import { DialogOverlay, DialogContent } from '@reach/dialog';

export const ModalClose = styled.button`
  all: initial;
  box-sizing: border-box;
  position: relative;
  width: 14px;
  height: 14px;
  position: absolute;
  top: 25px;
  right: 30px;
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

export const ModalOverlay = styled(DialogOverlay)`
  display: grid;
  padding: 16px;
  position: fixed;
  inset: 0;
  background: rgba(23, 18, 55, 0.6);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 999999;
  place-items: center;
`;

export const ModalArea = styled.div`
  margin: auto 32px; auto 56px;
  position: relative;
  width: 100%;
  max-width: 620px;
`;

export const ModalContent = styled(DialogContent)`
  outline: 0;
  position: relative;
  display: flex;
  flex-direction: column;
  color: var(--colors-bayoux);
  box-shadow: 0 12px 48px rgba(96, 101, 123, 0.24);
  --modalRadius: 10px;
  && {
    /** override reach-ui */
    width: 100%;
    background: transparent;
    margin: 0;
    padding: 0;
  }
`;

export const Header = styled.header`
  --modal-header-spacing-x: 24px;
  --modal-header-spacing-y: 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--modal-header-spacing-y) var(--modal-header-spacing-x);
  background-color: var(--colors-blank);
  color: var(--colors-darkBlue);
  border-bottom: 1px solid rgba(0, 35, 75, 0.1);
`;

export const HeaderTitle = styled.h2`
  display: flex;
  align-items: center;
  ${({ theme }) => theme.typography.bodyLeadMedium}
`;

export const Body = styled.div`
  --modal-body-spacing-x: 56px;
  --modal-body-spacing-y: 32px;

  background-color: var(--colors-blank);
  padding: var(--modal-body-spacing-y) var(--modal-body-spacing-x);

  &:first-child {
    border-radius: var(--modalRadius) var(--modalRadius) 0 0;
  }

  &:last-child {
    border-radius: 0 0 var(--modalRadius) var(--modalRadius);
  }
`;

export const Footer = styled.footer`
  padding: 20px 16px;
  background: var(--colors-blank);
  border-top: 1px solid rgba(0, 35, 75, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;

  > div {
    width: 265px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column: 1fr 1fr;
    gap: 24px;
  }
`;
