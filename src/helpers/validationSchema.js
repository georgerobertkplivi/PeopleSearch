import { string } from 'yup';
import { isValidCost } from 'helpers/currency';

export const baseString = string().trim().nullable();

export const currencyNegativeFormatRegex = new RegExp(
  /^-(\d{1,3},?(\d{3},?)*\d{3}(\.\d{0,2})?|\d{1,3}(\.\d{0,2})?|\.\d{1,2}?)$/
);

export const currencyIntegerOnlyFormatRegex = new RegExp(
  /(?=\d)^\$?(([1-9]\d{0,2}(,\d{3})*)|\d+)?$/
);

export function isValidIntegerOnlyCost(value) {
  return currencyIntegerOnlyFormatRegex.test(value);
}

export function isValidNegativeCost(value) {
  return currencyNegativeFormatRegex.test(value);
}

export const integerCurrencyOnlyAmountSchema = baseString
  .test(
    'is-positive-amount',
    'Negative amounts are not valid',
    (value) => !isValidNegativeCost(value)
  )
  .test(
    'is-valid-integer-currency-amount',
    'Please enter a whole number. Ex: 1024',
    (value) => !value || isValidIntegerOnlyCost(value)
  );

export const currencyAmountSchema = baseString
  .test(
    'is-positive-amount',
    'Negative amounts are not valid',
    (value) => !isValidNegativeCost(value)
  )
  .test(
    'is-valid-currency-amount',
    'Please use US standard currency format. Ex: 1,024.12',
    (value) => !value || isValidCost(value)
  );

export const genericRequiredLabel = 'Required field';
