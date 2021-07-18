import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

export const setLoading = (loading = false) => {
  return {
    type: types.UPDATE_MEAL_LOADING,
    payload: {loading},
  };
};

export const setItem = item => {
  return {
    type: types.UPDATE_MEAL_ITEM,
    payload: {item},
  };
};

export const getMealById = () => {
  return async (dispatch, getState) => {
    try {
      const meal = getState().meals.item;
      if (!meal) {
        return;
      }

      dispatch(setItem(null));
      dispatch(setLoading(true));
      const params = {i: meal?.idMeal};
      const getMealResult = await api.getMeal(params);
      const item = getMealResult.data?.meals || null;
      dispatch(setItem(item));
    } catch (e) {
      Alert.alert('Error', e.message || 'Error retrieving meal');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
