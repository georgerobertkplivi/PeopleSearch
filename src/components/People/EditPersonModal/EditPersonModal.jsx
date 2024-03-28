import { Modal } from 'components/Modal';
import { TextField, SelectField } from 'components/Form/formikIntegration';
import { Formik } from 'formik';
import { object } from 'yup';
import { baseString, genericRequiredLabel, currencyAmountSchema } from 'helpers/validationSchema';
import { COUNTRIES, CURRENCY_TYPES, EMPLOYMENT_TYPES } from 'constants/index';
import { convertToValidCost } from 'helpers/currency';
import Feedback from 'components/Feedback';
import styled from 'styled-components';

const validationSchema = object().shape({
  name: baseString.required(genericRequiredLabel),
  jobTitle: baseString.required(genericRequiredLabel),
  country: baseString.required(genericRequiredLabel),
  salary: currencyAmountSchema.required(genericRequiredLabel),
  currency: baseString.required(genericRequiredLabel),
  employment: baseString.required(genericRequiredLabel),
});

const FeedbackWrapper = styled.div`
  margin-top: 20px;
`;

export function AddEditMemberModal({ onSubmit, person, modalProps: { error, ...modalProps } }) {
  function handleSubmitForm({ salary, ...values }) {
    onSubmit({ ...values, salary: convertToValidCost(salary) });
  }

  return (
    <Modal formName="editPerson" {...modalProps}>
      <Formik
        initialValues={{
          name: person?.name || '',
          jobTitle: person?.jobTitle || '',
          country: person?.country || '',
          salary: person?.salary || '',
          currency: person?.currency || '',
          employment: person?.employment || '',
        }}
        onSubmit={handleSubmitForm}
        validationSchema={validationSchema}
      >
        {({ handleSubmit }) => (
          <form id="editPerson" onSubmit={handleSubmit}>
            <TextField
              id="name"
              name="name"
              placeholder="Name"
              label="Name"
              helper="Their first and last name."
            />
            <TextField
              id="jobTitle"
              name="jobTitle"
              label="Job title"
              placeholder="Job title"
              helper="What is their role?"
            />
            <SelectField
              data-test-id="country-input"
              name="country"
              label="Country"
              helper="Where they live most of the time."
            >
              {COUNTRIES.map((country, idx) => (
                <option data-testid="country-option" key={`country-${idx}`}>
                  {country}
                </option>
              ))}
            </SelectField>
            <SelectField
              data-test-id="currency-input"
              name="currency"
              label="Currency of salary"
              helper="What currency will they be paid in?"
            >
              {Object.values(CURRENCY_TYPES).map((currencyValue, idx) => (
                <option data-testid="currency-option" key={`currency-${idx}`}>
                  {currencyValue}
                </option>
              ))}
            </SelectField>
            <TextField
              id="salary-input"
              component={TextField}
              name="salary"
              label="Salary"
              placeholder="Salary"
              helper="Their gross yearly salary."
              type="decimal"
            />
            <SelectField
              data-test-id="employment-input"
              name="employment"
              label="Type of employment"
              helper="Full-time employee or contractor."
            >
              {Object.values(EMPLOYMENT_TYPES).map((employment, idx) => (
                <option data-testid="employment-option" key={`employment-${idx}`}>
                  {employment}
                </option>
              ))}
            </SelectField>
          </form>
        )}
      </Formik>
      {error && (
        <FeedbackWrapper>
          <Feedback data-testid="edit-person-error" type="error">
            Oops something went wrong
          </Feedback>
        </FeedbackWrapper>
      )}
    </Modal>
  );
}

AddEditMemberModal.defaultProps = {
  person: {},
  modalProps: {},
};
