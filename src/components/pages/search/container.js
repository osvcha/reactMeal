import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as searchActions from '../../../redux/search/actions';
import SearchView from './view';

const Search = () => {
  const dispatch = useDispatch();

  const areas = useSelector(state => state.search.areas);
  const ingredients = useSelector(state => state.search.ingredients);

  const initAreas = useCallback(
    () => dispatch(searchActions.getAreas()),
    [dispatch],
  );

  const initIngredients = useCallback(
    () => dispatch(searchActions.getIngredients()),
    [dispatch],
  );

  const setSearch = useCallback(
    formData => dispatch(searchActions.setSearch(formData)),
    [dispatch],
  );

  const onAreaSubmit = useCallback(
    formData => {
      setSearch(formData);
      Actions.push('SearchResult', {
        title: 'Results for: ' + (formData?.area || ''),
      });
    },
    [setSearch],
  );

  useEffect(() => {
    initAreas();
    initIngredients();
  }, [initAreas, initIngredients]);

  return (
    <SearchView
      areas={areas}
      ingredients={ingredients}
      onAreaSubmit={onAreaSubmit}
    />
  );
};

export default Search;
