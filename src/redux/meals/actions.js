import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

export const setLoading = (loading = false) => {
  return {
    type: types.UPDATE_MEALS_LOADING,
    payload: {loading},
  };
};

export const setList = (list = []) => ({
  type: types.UPDATE_MEALS_LIST,
  payload: {list},
});

export const setItem = item => {
  return {
    type: types.UPDATE_MEALS_ITEM,
    payload: {item},
  };
};

export const getMealsByCategory = () => {
  return async (dispatch, getState) => {
    try {
      const category = getState().categories.item;
      if (!category) {
        return;
      }
      dispatch(setList([]));
      dispatch(setLoading(true));
      const params = {c: category?.strCategory};
      const getMealsResult = await api.getMeals(params);
      const list = getMealsResult.data?.meals || [];
      dispatch(setList(list));
    } catch (e) {
      Alert.alert('Error', e.message || 'Error retrieving meals');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
