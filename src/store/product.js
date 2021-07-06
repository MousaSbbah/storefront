// Each category should have a normalized name, display name, and a description
import axios from 'axios';
let initialState = {
  products: [],
  currentCategory: 'none',
};

// this is a reducer
const reducer = (state = initialState, action) => {
  let { type, payload } = action;
  if (state.currentCategory === payload) return state;
  switch (type) {
    case 'GET_PRODUCTS':
      return { ...state, products: payload };

    case 'FILTER_PRODUCTS':
      let newCategory = payload;
      const products = state.products.filter((val) => {
        return val.category === newCategory;
      });
      return {
        products: state.products,
        displayProducts: products,
        currentCategory: newCategory,
      };
    case 'ALL':
      return {
        products: state.products,
        displayProducts: state.products,
        currentCategory: 'all',
      };
    default:
      return state;
  }
};

// BELOW ARE THE ACTIONS
export const filterProducts = (category) => {
  if (category === 'all') return { type: 'ALL' };

  return {
    type: 'FILTER_PRODUCTS',
    payload: category,
  };
};

export function getProducts() {
  return async function (dispatch) {
    const response = await axios.get(
      'https://api-js401.herokuapp.com/api/v1/products'
    );
    dispatch({
      type: 'GET_PRODUCTS',
      payload: response.data.results,
    });
  };
}
export function incrementInStock(product) {
  return async function (dispatch) {
    console.log(product);
    const inStock = product.inStock + 1;
    await axios({
      url: `https://api-js401.herokuapp.com/api/v1/products/${product._id}`,
      method: 'put',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ inStock }),
    });

    const response = await axios.get(
      'https://api-js401.herokuapp.com/api/v1/products'
    );
    dispatch({
      type: 'GET_PRODUCTS',
      payload: response.data.results,
    });
  };
}

export function decrementInStock(product) {
  return async function (dispatch) {
    console.log(product);
    const inStock = product.inStock - 1;
    await axios({
      url: `https://api-js401.herokuapp.com/api/v1/products/${product._id}`,
      method: 'put',
      mode: 'cors',
      cache: 'no-cache',
      headers: { 'Content-Type': 'application/json' },
      data: JSON.stringify({ inStock }),
    });

    const response = await axios.get(
      'https://api-js401.herokuapp.com/api/v1/products'
    );
    dispatch({
      type: 'GET_PRODUCTS',
      payload: response.data.results,
    });
  };
}

export default reducer;
