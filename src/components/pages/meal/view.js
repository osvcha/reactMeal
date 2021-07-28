import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  ScrollView,
  Text,
  Image,
  View,
  Dimensions,
  ActivityIndicator,
} from 'react-native';
import colors from '../../../assets/colors';
import styles from './styles';

const win = Dimensions.get('window');
const ratio = win.width / 700;

const MealComponent = ({loading, mealData}) => {
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
              source={mealData?.image ? {uri: mealData?.image} : null}
            />
            <Text style={styles.mealTitle}>{mealData?.name}</Text>
            <View style={styles.listIngredients}>
              {mealData?.ingredients.map((ingredient, index) => (
                <View style={styles.row} key={index}>
                  <View style={styles.bullet}>
                    <Text>{'\u2022' + ' '}</Text>
                  </View>
                  <View style={styles.bulletText}>
                    <Text>
                      <Text style={styles.ingredient}>{ingredient.name}: </Text>
                      <Text style={styles.quantity}>{ingredient.quantity}</Text>
                    </Text>
                  </View>
                </View>
              ))}
            </View>
            <Text style={styles.mealInstructions}>
              {mealData?.instructions}
            </Text>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default MealComponent;
