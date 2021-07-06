// Each category should have a normalized name, display name, and a description
import axios from 'axios';
let initialState = {
  categories: [],
  active: 'all',
};

// this is a reducer
const reducer = (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case 'CHANGE_CATEGORY':
      let newCategory = payload;
      return { categories: state.categories, active: newCategory };
    case 'GET_CATEGORIES':
      return { categories: payload };
    case 'ALL':
      return { categories: state.categories, active: 'all' };
    default:
      return state;
  }
};

// BELOW ARE THE ACTIONS
export const categoryChange = (category) => {
  return {
    type: 'CHANGE_CATEGORY',
    payload: category,
  };
};

export const allList = () => {
  return {
    type: 'ALL',
  };
};

export const getCategories = () => {
  return async function (dispatch) {
    const response = await axios.get(
      'https://api-js401.herokuapp.com/api/v1/categories'
    );
    dispatch({
      type: 'GET_CATEGORIES',
      payload: response.data.results,
    });
  };
};
export default reducer;
