import { createStore, combineReducers } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';

import categoriesReducer from './categories';
import productsReducer from './product';
import cartReducer from './cart';

let reducers = combineReducers({ cart:cartReducer ,categories: categoriesReducer,products:productsReducer});


export default createStore(reducers, composeWithDevTools());

