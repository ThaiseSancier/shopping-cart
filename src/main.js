import { searchCep } from './helpers/cepFunctions';
import { fetchProductsList } from './helpers/fetchFunctions';
import './style.css';
import { createProductElement } from './helpers/shopFunctions';

document.querySelector('.cep-button').addEventListener('click', searchCep);

const productsList = await fetchProductsList('computador');
const classProducts = document.querySelector('.products');
productsList.forEach((products) => {
  const productsSection = createProductElement(products);
  classProducts.appendChild(productsSection);
});
