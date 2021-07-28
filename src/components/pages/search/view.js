import React from 'react';

import {SafeAreaView, StatusBar, Text} from 'react-native';
import styles from './styles';

const SearchComponent = ({}) => {
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} barStyle="default" />
        <Text style={styles.pageTitle}>ReactMeal</Text>
        <Text style={styles.pageSubtitle}>Search recipes</Text>
      </SafeAreaView>
    </>
  );
};

export default SearchComponent;
