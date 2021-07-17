import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import MealsView from './view';
import * as mealsActions from '../../../redux/meals/actions';

const Meals = () => {
  const dispatch = useDispatch();

  const list = useSelector(state => state.meals.list);
  const loading = useSelector(state => state.meals.loading);

  const initList = useCallback(
    () => dispatch(mealsActions.getMealsByCategory()),
    [dispatch],
  );

  useEffect(() => {
    initList();
  }, [initList]);

  const setMeal = useCallback(
    meal => {
      dispatch(mealsActions.setItem(meal));
    },
    [dispatch],
  );

  return (
    <MealsView
      loading={loading}
      list={list}
      initList={initList}
      setMeal={setMeal}
    />
  );
};

export default Meals;
