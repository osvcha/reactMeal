import {Alert} from 'react-native';
import * as types from './types';
import * as api from '../../api';

export const setLoading = (loading = false) => {
  const action = {
    type: types.UPDATE_CATEGORIES_LOADING,
    payload: {loading: loading},
  };
  return action;
};

export const setList = (list = []) => {
  const action = {
    type: types.UPDATE_CATEGORIES_LIST,
    payload: {list},
  };
  return action;
};

export const setItem = item => {
  const action = {
    type: types.UPDATE_CATEGORIES_ITEM,
    payload: {item},
  };
  return action;
};

export const getList = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setLoading(true));
      const getCategoriesResult = await api.getCategories();
      const list = getCategoriesResult.data?.categories || [];

      const actionGenerated = setList(list);
      dispatch(actionGenerated);
    } catch (e) {
      Alert.alert(
        'Error',
        e.message || 'Ha ocurrido un error cargando las categorías',
      );
    } finally {
      dispatch(setLoading(false));
    }
  };
};
