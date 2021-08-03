import React from 'react';
import {SafeAreaView, FlatList, RefreshControl, StatusBar} from 'react-native';
import MealCard from '../../moleculas/card-meal';
import styles, {loadingColor} from './styles';

const SearchComponent = ({loading, list, initList}) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <FlatList
          data={list}
          keyExtractor={item => `meal-card-${item.idMeal}`}
          refreshControl={
            <RefreshControl
              onRefresh={initList}
              refreshing={loading}
              colors={[loadingColor]}
              tintColor={loadingColor}
            />
          }
          renderItem={({item}) => <MealCard meal={item} />}
        />
      </SafeAreaView>
    </>
  );
};

export default SearchComponent;
