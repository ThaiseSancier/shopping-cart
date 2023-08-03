import { searchCep } from './helpers/cepFunctions';
import { fetchProduct, fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement,
  createCartProductElement,
  getPrices } from './helpers/shopFunctions';
import { getSavedCartIDs } from './helpers/cartFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const classProducts = document.querySelector('.products');

const loadingP = () => {
  const createP = document.createElement('p');
  createP.innerHTML = 'carregando...';
  createP.classList.add('loading');
  classProducts.appendChild(createP);
};

const unloadingP = () => {
  const getP = document.querySelector('.loading');
  getP.remove();
};

const loadingError = () => {
  const createPError = document.createElement('p');
  createPError.innerHTML = 'Algum erro ocorreu, recarregue a página e tente novamente';
  createPError.classList.add('error');
  classProducts.appendChild(createPError);
};

const loadingProducts = async () => {
  loadingP();
  try {
    const productsList = await fetchProductsList('computador');
    productsList.forEach((products) => {
      const productsSection = createProductElement(products);
      classProducts.appendChild(productsSection);
    });
  } catch (error) {
    loadingError();
  } finally {
    unloadingP();
  }
};

const getSavedCart = () => {
  const getArrayIds = getSavedCartIDs();
  const getPromises = getArrayIds.map((id) => fetchProduct(id));
  Promise.all(getPromises)
    .then((data) => data.forEach((product) => {
      const creatCartElement = createCartProductElement(product);
      const getClass = document.querySelector('.cart__products');
      getClass.appendChild(creatCartElement);
      getPrices();
    }));
};

window.onload = () => {
  loadingProducts();
  getSavedCart();
  getPrices();
};
