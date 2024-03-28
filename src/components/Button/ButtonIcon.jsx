import { ButtonIconStyled, IconButtonStyled } from './Button.styled';

export function ButtonIcon(props) {
  const { children, icon, ...rest } = props;
  return (
    <IconButtonStyled type="button" {...rest}>
      {icon !== undefined && <ButtonIconStyled>{icon}</ButtonIconStyled>}
      {children}
    </IconButtonStyled>
  );
}
