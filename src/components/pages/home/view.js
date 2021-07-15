import React from 'react';

import {
  SafeAreaView,
  FlatList,
  StatusBar,
  RefreshControl,
  Text,
} from 'react-native';
import CategoryCard from '../../moleculas/card-category';
import styles from './styles';

const HomeComponent = ({initList, list, loading, onCategoryPress}) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} barStyle="default" />
        <Text style={styles.pageTitle}>ReactMeal</Text>
        <Text style={styles.pageSubtitle}>Choose a category</Text>
        <FlatList
          contentContainerStyle={styles.contentContainer}
          data={list}
          keyExtractor={item => `category-card-${item.idCategory}`}
          refreshControl={
            <RefreshControl
              refreshing={loading}
              onRefresh={initList}
              colors={['white']}
              tintColor={'grey'}
            />
          }
          renderItem={({item}) => (
            <CategoryCard
              category={item}
              onPress={category => onCategoryPress(category)}
            />
          )}
          numColumns={2}
        />
      </SafeAreaView>
    </>
  );
};

export default HomeComponent;
