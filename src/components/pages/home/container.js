import React, {useCallback, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {Actions} from 'react-native-router-flux';
import * as categoriesctions from '../../../redux/categories/actions';
import HomeView from './view';

const Home = () => {
  const dispatch = useDispatch();
  const {list, loading} = useSelector(state => state.categories);

  const initList = useCallback(
    () => dispatch(categoriesctions.getList()),
    [dispatch],
  );

  const setItem = useCallback(
    value => dispatch(categoriesctions.setItem(value)),
    [dispatch],
  );

  useEffect(() => {
    initList();
  }, [initList]);

  const onCategoryPress = useCallback(
    category => {
      setItem(category);
      Actions.push('Meals', {title: category?.strCategory || ''});
    },
    [setItem],
  );

  return (
    <HomeView
      initList={initList}
      list={list}
      loading={loading}
      setItem={setItem}
      onCategoryPress={onCategoryPress}
    />
  );
};

export default Home;
