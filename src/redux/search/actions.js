import * as types from './types';
import * as api from '../../api';
import {Alert} from 'react-native';

export const setAreas = (areas = []) => {
  var areasData = [];
  areas.map(area => {
    areasData.push(area.strArea);
  });
  return {
    type: types.UPDATE_SEARCH_AREAS,
    payload: {areasData},
  };
};

export const setSearch = formData => {
  const action = {
    type: types.UPDATE_SEARCH_FORMDATA,
    payload: {formData},
  };
  return action;
};

export const setLoading = (loading = false) => {
  return {
    type: types.UPDATE_SEARCH_LOADING,
    payload: {loading},
  };
};

export const setList = (list = []) => ({
  type: types.UPDATE_SEARCH_LIST,
  payload: {list},
});

export const getAreas = () => {
  return async (dispatch, getState) => {
    try {
      dispatch(setAreas([]));
      const getAreasResult = await api.getAreas();
      const areas = getAreasResult.data?.meals || [];
      dispatch(setAreas(areas));
    } catch (e) {
      Alert.alert('Error', e.message || 'Error retrieving areas');
    } finally {
    }
  };
};

export const getMealsByArea = () => {
  return async (dispatch, getState) => {
    try {
      const formData = getState().search.formData;
      // console.log('getMealByArea: ');
      // console.log(formData.area);
      dispatch(setList([]));
      dispatch(setLoading(true));
      const params = {a: formData.area};
      const getMealsResult = await api.getMeals(params);
      const list = getMealsResult.data?.meals || [];
      dispatch(setList(list));
    } catch (e) {
      Alert.alert('Error', e.message || 'Error retrieving areas');
    } finally {
      dispatch(setLoading(false));
    }
  };
};