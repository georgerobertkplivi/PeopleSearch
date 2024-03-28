const CURRENCY_LOCALES = {
  EUR: 'en-GB',
  GBP: 'en-GB',
  USD: 'en-US',
};

export const formatSalary = (currency, salary = 0) => {
  if (currency && CURRENCY_LOCALES[currency]) {
    const salaryParts = new Intl.NumberFormat(CURRENCY_LOCALES[currency], {
      style: 'currency',
      currency,
      currencyDisplay: 'symbol',
    }).formatToParts(salary);

    const [symbol, ...salaryInfo] = salaryParts;

    return `${currency} ${salaryInfo.map(({ value }) => value).join('')} ${symbol.value}`;
  }

  return '';
};
