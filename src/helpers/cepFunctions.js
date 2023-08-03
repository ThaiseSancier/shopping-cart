export const getAddress = async (cep) => {
  const awesomeURL = `https://cep.awesomeapi.com.br/json/${cep}`;
  const brasilURL = `https://brasilapi.com.br/api/cep/v2/${cep}`;
  let address = '';
  const awesomeAPI = await fetch(awesomeURL);
  const brasilAPI = await fetch(brasilURL);
  await Promise.any([awesomeAPI, brasilAPI])
    .then((response) => response.json())
    .then((data) => {
      if (data.cep) {
        address = `${data.address} - ${data.district} - ${data.city} - ${data.state}`
        || `${data.street} - ${data.neighborhood} - ${data.city} - ${data.state}`;
      } else {
        throw new Error('CEP não encontrado');
      }
    });
  return address;
};

export const searchCep = async () => {
  const addressSpan = document.querySelector('.cart__address');
  try {
    const cep = document.querySelector('.cep-input').value;
    const address = await getAddress(cep);
    addressSpan.innerHTML = address;
  } catch (error) {
    addressSpan.innerHTML = 'CEP não encontrado';
  }
};
