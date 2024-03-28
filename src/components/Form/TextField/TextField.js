import { Field, Label, Hint } from '../FieldParts';
import { Input } from './TextField.styled';
export default function TextField({ label, value, helper, errorMsg, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label $hasError={!!errorMsg} $hasValue={!!value}>
        {label}
      </Label>
      <Input value={value} {...props} {...invalidAttr} />
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}

TextField.defaultProps = {
  type: 'text',
};
