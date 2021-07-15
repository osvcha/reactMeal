import * as types from './types';

export const initialState = {
  loading: false,
  list: [],
  item: null,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_CATEGORIES_LIST:
      const newState = {...state, list: action.payload?.list};
      return newState;

    case types.UPDATE_CATEGORIES_LOADING:
      return {
        ...state,
        loading: action.payload?.loading,
      };

    case types.UPDATE_CATEGORIES_ITEM:
      return {
        ...state,
        item: action.payload?.item,
      };

    default:
      return state;
  }
};

export default reducer;
