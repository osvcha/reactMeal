import axios from 'axios';
import {API_URL} from '../config/api';

const aInstance = axios.create({
  baseURL: API_URL,
  headers: {'Content-Type': 'application/json'},
});

export const getCategories = () => {
  const url = '/categories.php';
  return aInstance.get(url);
};

export const getMeals = params => {
  const url = '/filter.php';
  return aInstance.get(url, {params: params});
};

export const getMeal = params => {
  const url = '/lookup.php';
  return aInstance.get(url, {params: params});
};

export const getAreas = () => {
  const url = '/list.php?a=list';
  return aInstance.get(url);
};

export const getIngredients = () => {
  const url = '/list.php?i=list';
  return aInstance.get(url);
};
