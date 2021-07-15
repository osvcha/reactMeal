import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import categoriesReducer from '../redux/categories/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
