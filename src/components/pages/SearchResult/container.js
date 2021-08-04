import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as searchActions from '../../../redux/search/actions';
import * as mealsActions from '../../../redux/meals/actions';
import SearchView from './view';

const SearchResult = () => {
  const dispatch = useDispatch();

  const list = useSelector(state => state.search.list);
  const loading = useSelector(state => state.search.loading);

  const initList = useCallback(
    () => dispatch(searchActions.getMealsByArea()),
    [dispatch],
  );

  const setItem = useCallback(
    value => dispatch(mealsActions.setItem(value)),
    [dispatch],
  );

  const onMealPressed = useCallback(
    meal => {
      console.log('onMealPeessed search');
      console.log(meal);
      setItem(meal);
      Actions.push('MealSearch', {title: 'Recipe'});
    },
    [setItem],
  );

  useEffect(() => {
    initList();
  }, [initList]);

  return (
    <SearchView
      loading={loading}
      list={list}
      initList={initList}
      onMealPressed={onMealPressed}
    />
  );
};

export default SearchResult;
