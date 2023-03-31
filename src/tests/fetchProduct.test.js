import './mocks/fetchSimulator';
import { fetchProduct } from '../helpers/fetchFunctions';
import product from './mocks/product';

// implemente seus testes aqui
describe('Teste a função fetchProduct', () => {
  it('Testa se fetchProduct é uma função', () => {
    expect(typeof fetchProduct).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProduct', async () => {
    const apiEndPoint = 'https://api.mercadolibre.com/items/MLB1405519561';
    await fetchProduct('MLB1405519561');
    expect(fetch).toHaveBeenCalledWith(apiEndPoint);
  });

  it('a função com o argumento "MLB1405519561" retorna computadorSearch', async () => {
    const fetchResponse = await fetchProduct('MLB1405519561');
    expect(fetchResponse).toEqual(product);
  });

  it('a função sem argumento retorna o erro "ID não informado"', async () => {
    const fetchError = 'ID não informado';
    await expect(fetchProduct()).rejects.toThrow(fetchError);
  });
});
