import styled, { css } from 'styled-components';
import { ReactComponent as IconTimesCircle } from 'theme/icons/times-circle.svg';

const ContainerStyled = styled.div`
  /* Box */
  ${({ type }) => getStyle(type)}
  border-width: 2px;
  border-style: solid;
  border-radius: 8px;
  padding: 28px 24px;
  display: flex;
  align-items: center;

  /* Text */
  ${({ theme }) => theme.typography.body}
  line-height: 20px;
  color: var(--colors-bayoux);
`;

const IconStyled = styled.div`
  margin-right: 14px;
  svg {
    width: 24px;
    height: 24px;
    display: block;
  }
  path {
    fill: var(--colors-redPink);
  }
`;

const getStyle = (type) => {
  switch (type) {
    case 'error':
      return css`
        background: rgba(255, 75, 85, 0.05);
        border-color: rgba(255, 74, 90, 0.45);
      `;
    default:
      throw Error(`Unknown type: "${type}"`);
  }
};

const Icon = ({ type }) => {
  switch (type) {
    case 'error':
      return <IconTimesCircle />;
    default:
      throw Error(`Unknown type: "${type}"`);
  }
};

export default function Feedback({ type, children, ...props }) {
  return (
    <ContainerStyled type={type} {...props}>
      <IconStyled>
        <Icon type={type} />
      </IconStyled>
      {children}
    </ContainerStyled>
  );
}
