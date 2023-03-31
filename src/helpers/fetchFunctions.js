export const fetchProduct = async (productId) => {
  if (!productId) {
    throw new Error('ID não informado');
  }
  try {
    const fetchResponseId = await fetch(`https://api.mercadolibre.com/items/${productId}`);
    const returnDataId = await fetchResponseId.json();
    return returnDataId;
  } catch (error) {
    return error.message;
  }
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
