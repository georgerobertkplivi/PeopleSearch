import { Field, Label, Hint } from '../FieldParts';
import { Select } from './SelectField.styled';

export default function SelectField({ children, label, helper, errorMsg, value, ...props }) {
  const invalidAttr = errorMsg ? { 'aria-invalid': true } : {};

  return (
    <Field as="label">
      <Label $hasValue={!!value}>{label}</Label>
      <Select $hasValue={!!value} value={value} {...props} {...invalidAttr}>
        <option value="" hidden>
          {label}
        </option>
        {children}
      </Select>
      <Hint errorMsg={errorMsg} helper={helper} />
    </Field>
  );
}
