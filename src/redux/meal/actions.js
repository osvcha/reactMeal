import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

export const setLoading = (loading = false) => {
  return {
    type: types.UPDATE_MEAL_LOADING,
    payload: {loading},
  };
};

export const setMealData = item => {
  const mealImage = item?.[0].strMealThumb;
  const mealName = item?.[0].strMeal;
  const mealInstructions = item?.[0].strInstructions;

  const mealIngredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = item?.[0]['strIngredient' + i];
    const quantity = item?.[0]['strMeasure' + i];
    if (ingredient !== '' && ingredient !== null) {
      mealIngredients.push({
        name: ingredient,
        quantity: quantity,
      });
    }
  }

  const mealData = {
    image: mealImage,
    name: mealName,
    instructions: mealInstructions,
    ingredients: mealIngredients,
  };
  return {
    type: types.UPDATE_MEAL_ITEM,
    payload: {mealData},
  };
};

export const getMealById = () => {
  return async (dispatch, getState) => {
    try {
      const meal = getState().meals.item;
      if (!meal) {
        return;
      }

      dispatch(setMealData(null));
      dispatch(setLoading(true));
      const params = {i: meal?.idMeal};
      const getMealResult = await api.getMeal(params);
      const item = getMealResult.data?.meals || null;
      dispatch(setMealData(item));
    } catch (e) {
      Alert.alert('Error', e.message || 'Error retrieving meal');
    } finally {
      dispatch(setLoading(false));
    }
  };
};
