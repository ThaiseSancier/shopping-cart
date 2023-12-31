import './mocks/fetchSimulator';
import { fetchProductsList } from '../helpers/fetchFunctions';
import computadorSearch from './mocks/search';

// implemente seus testes aqui
describe('Teste a função fetchProductsList', () => {
  it('fetchProductsList é uma função', () => {
    expect(typeof fetchProductsList).toBe('function');
  });

  it('fetch é chamado ao executar fetchProductsList', async () => {
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalled();
  });

  it('fetch é chamado com o endpoint correto ao executar fetchProductsList', async () => {
    const apiEndPoint = 'https://api.mercadolibre.com/sites/MLB/search?q=computador';
    await fetchProductsList('computador');
    expect(fetch).toHaveBeenCalledWith(apiEndPoint);
  });

  it('a função com o argumento "computador" retorna computadorSearch', async () => {
    const fetchResponse = await fetchProductsList('computador');
    expect(fetchResponse).toEqual(computadorSearch);
  });

  it('a função sem argumento retorna o erro "Termo de busca não informado"', async () => {
    const fetchError = 'Termo de busca não informado';
    await expect(fetchProductsList()).rejects.toThrow(fetchError);
  });

  it('testa o catch da função', async () => {
    try {
      await fetchProductsList('xxxxxxxxx');
    } catch (e) {
      expect(e).toEqual(error.message);
    }
  });
});
