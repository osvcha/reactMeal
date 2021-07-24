import * as types from './types';

export const initialState = {
  mealData: null,
  loading: false,
};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case types.UPDATE_MEAL_ITEM:
      return {
        ...state,
        mealData: action.payload?.mealData,
      };

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
