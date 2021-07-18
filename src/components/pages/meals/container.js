import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as mealsActions from '../../../redux/meals/actions';
import MealsView from './view';

const Meals = () => {
  const dispatch = useDispatch();

  const list = useSelector(state => state.meals.list);
  const loading = useSelector(state => state.meals.loading);

  const initList = useCallback(
    () => dispatch(mealsActions.getMealsByCategory()),
    [dispatch],
  );

  const setItem = useCallback(
    value => dispatch(mealsActions.setItem(value)),
    [dispatch],
  );

  useEffect(() => {
    initList();
  }, [initList]);

  const onMealPressed = useCallback(
    meal => {
      setItem(meal);
      Actions.push('Meal', {title: 'Recipe'});
    },
    [setItem],
  );

  return (
    <MealsView
      loading={loading}
      list={list}
      initList={initList}
      onMealPressed={onMealPressed}
    />
  );
};

export default Meals;
