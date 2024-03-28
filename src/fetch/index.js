const host = process.env.REACT_APP_SERVER_HOST;

if (typeof host !== 'string') {
  throw Error('REACT_APP_SERVER_HOST is not defined');
}

export async function fetch(input, init) {  
  const response = await window.fetch(`${host}/${input}`, init);
  if (response.ok === false) {
    throw Error(`${response.statusText} (${response.status})`);
  } else {
    return await response.json();
  }
}
