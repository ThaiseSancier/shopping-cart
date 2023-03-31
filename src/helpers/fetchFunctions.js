export const fetchProduct = () => {
  // seu código aqui
};

export const fetchProductsList = async (query) => {
  if (!query) {
    throw new Error('Termo de busca não informado');
  }
  try {
    const fetchResponse = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${query}`);
    const returnData = await fetchResponse.json();
    return returnData.results;
  } catch (error) {
    return error.message;
  }
};
