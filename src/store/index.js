import { createStore, combineReducers,applyMiddleware } from 'redux';

import { composeWithDevTools } from 'redux-devtools-extension';
import categoriesReducer from './categories';
import productsReducer from './product';
import cartReducer from './cart';
import thunk from 'redux-thunk'

let reducers = combineReducers({ cart:cartReducer ,categories: categoriesReducer,products:productsReducer});


export default  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));;

