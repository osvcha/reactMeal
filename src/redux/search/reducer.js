import * as types from './types';

export const initialState = {
  list: [],
  areasData: [],
  mealData: null,
  ingredientsData: [],
  formData: null,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_SEARCH_AREAS:
      return {...state, areas: action.payload?.areasData};

    case types.UPDATE_SEARCH_INGREDIENTS:
      return {...state, ingredients: action.payload?.ingredientsData};

    case types.UPDATE_SEARCH_ITEM:
      return {...state, areas: action.payload?.item};

    case types.UPDATE_SEARCH_FORMDATA:
      return {...state, formData: action.payload?.formData};

    case types.UPDATE_SEARCH_LIST:
      return {
        ...state,
        list: action.payload?.list,
      };

    case types.UPDATE_SEARCH_LOADING:
      return {
        ...state,
        loading: action.payload?.loading,
      };
    default:
      return state;
  }
};

export default reducer;
