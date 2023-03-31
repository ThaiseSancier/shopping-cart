import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

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

const loadingProducts = async () => {
  loadingP();
  const productsList = await fetchProductsList('computador');
  productsList.forEach((products) => {
    const productsSection = createProductElement(products);
    classProducts.appendChild(productsSection);
  });
  unloadingP();
};

window.onload = () => loadingProducts();
