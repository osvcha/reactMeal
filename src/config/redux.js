import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import categoriesReducer from '../redux/categories/reducer';
import mealsReducer from '../redux/meals/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
