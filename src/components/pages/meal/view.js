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
var ingredients = [];

const MealComponent = ({loading, item}) => {
  const updateIngredients = () => {
    ingredients = [];

    for (let i = 1; i <= 20; i++) {
      const ingredient = item?.['strIngredient' + i];
      const quantity = item?.['strMeasure' + i];
      if (ingredient !== '' && ingredient !== null) {
        ingredients.push({
          name: ingredient,
          quantity: quantity,
        });
      }
    }
  };
  updateIngredients();

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
            <Text style={styles.mealTitle}>{item?.strMeal}</Text>

            <View style={styles.listIngredients}>
              {ingredients.map((ingredient, index) => (
                <View style={styles.row}>
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
            <Text style={styles.mealInstructions}>{item?.strInstructions}</Text>
          </ScrollView>
        )}
      </SafeAreaView>
    </>
  );
};

export default MealComponent;
