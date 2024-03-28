import { ButtonIconStyled, ButtonStyled, LoadingAddon } from './Button.styled';

export { ButtonIconStyled };

export default function Button(props) {
  const { children, icon, isLoading, variant, ...rest } = props;
  return (
    <ButtonStyled $variant={variant} type="button" $isLoading={isLoading} {...rest}>
      {icon !== undefined && <ButtonIconStyled>{icon}</ButtonIconStyled>}
      {children}
      {isLoading && (
        <>
          <LoadingAddon />
        </>
      )}
    </ButtonStyled>
  );
}

Button.defaultProps = {
  variant: 'primary',
};
