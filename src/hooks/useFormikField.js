import { useField, useFormikContext } from 'formik';

export function useFormikField(name) {
  const [field] = useField(name);
  const { errors, touched: touchedFields } = useFormikContext();

  const error = (errors || {})[field?.name];
  const touched = (touchedFields || {})[field?.name];

  return { error, touched, field };
}
