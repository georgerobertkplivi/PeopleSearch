export function isValidCost(value) {
  return currencyFormatRegex.test(value);
}

export const currencyFormatRegex = new RegExp(
  /^(\d{1,3},?(\d{3},?)*\d{3}(\.\d{0,2})?|\d{1,3}(\.\d{0,2})?|\.\d{1,2}?)$/
);

export function convertToValidCost(value) {
  return parseFloat(value.toString().replace(/,/g, ''));
}
