import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/colors';
import styles from './styles';

const win = Dimensions.get('window');
const ratio = win.width / 700;

const MealComponent = ({loading, item}) => {
  console.log(loading);
  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        {loading ? (
          <ActivityIndicator color={colors.grey} />
        ) : (
          <ScrollView>
            <Image
              style={[styles.image, {height: 700 * ratio}]}
              source={{uri: item?.strMealThumb}}
            />
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default MealComponent;
