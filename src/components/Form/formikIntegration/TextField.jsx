import TextFieldBase from 'components/Form/TextField';
import { useFormikField } from 'hooks/useFormikField';

export function TextField(props) {
  const { field, error, touched } = useFormikField(props.name);

  return <TextFieldBase {...field} {...props} errorMsg={error && touched ? error : ''} />;
}
