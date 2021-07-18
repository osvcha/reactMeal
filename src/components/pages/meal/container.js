import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import * as mealActions from '../../../redux/meal/actions';
import MealView from './view';

const Meal = () => {
  const dispatch = useDispatch();

  const item = useSelector(state => state.meal.item);
  const loading = useSelector(state => state.meal.loading);

  const initContent = useCallback(
    () => dispatch(mealActions.getMealById()),
    [dispatch],
  );

  useEffect(() => {
    initContent();
  }, [initContent]);

  return (
    <MealView loading={loading} item={item?.[0]} initContent={initContent} />
  );
};

export default Meal;
