import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';

import categoriesReducer from '../redux/categories/reducer';
import mealsReducer from '../redux/meals/reducer';
import mealReducer from '../redux/meal/reducer';
import searchReducer from '../redux/search/reducer';

const rootReducer = combineReducers({
  categories: categoriesReducer,
  meals: mealsReducer,
  meal: mealReducer,
  search: searchReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
