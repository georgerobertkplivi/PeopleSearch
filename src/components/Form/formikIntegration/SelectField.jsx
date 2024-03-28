import SelectFieldBase from 'components/Form/SelectField';
import { useFormikField } from 'hooks/useFormikField';

export function SelectField(props) {
  const { field, error, touched } = useFormikField(props.name);

  return <SelectFieldBase {...field} {...props} errorMsg={error && touched ? error : ''} />;
}
