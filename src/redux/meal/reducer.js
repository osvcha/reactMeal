import * as types from './types';

export const initialState = {
  item: null,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_MEAL_ITEM:
      return {...state, item: action.payload?.item};

    case types.UPDATE_MEAL_LOADING:
      return {
        ...state,
        loading: action.payload?.loading,
      };

    default:
      return state;
  }
};

export default reducer;
