import { fetch } from './index';

/**
 * Return a list of people
 *
 * @param {string} params.name: search for name (substring)
 * @param {string} params.types: filter for employment type
 */
export async function fetchPeople(params, fetchOptions) {
  const { nameFilter, typeFilter } = params;
  const builder = new URLSearchParams('');
  typeFilter.forEach((type) => {
    builder.append('employment', type);
  });

  const nameFilterQuery = builder.toString();
  const url = `people?name_like=${nameFilter}${nameFilterQuery ? `&${nameFilterQuery}` : ''}`;
  const response = await fetch(url, fetchOptions);
  return response;
}

export async function updatePerson({ id, ...values }) {
  return fetch(`people/${id}`, {
    method: 'PATCH',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
}

export async function createPerson({ values }) {
  return fetch(`people`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(values),
  });
}
