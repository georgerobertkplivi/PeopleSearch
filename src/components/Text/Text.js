import styled, { css } from 'styled-components';

const Text = styled.span`
  ${({ theme, size }) => size && theme.typography[size]}
`;

export default Text;

export const TextLight = styled(Text)`
  color: var(--colors-lynch);
`;

const textButtonLinkCss = css`
  color: var(--colors-irisBlue);
  ${({ theme }) => theme.typography.bodyMedium}
  text-decoration: none;

  display: inline-block;
  padding: 4px 8px;
  border-radius: 4px;

  &:hover {
    background: var(--colors-linkWater);
  }
`;

export const TextButtonLink = styled.a`
  ${textButtonLinkCss}
`;
