import React, {Component} from 'react';
import {TouchableOpacity, Text, View} from 'react-native';
import styles from './styles';

class MealCard extends Component {
  render() {
    return (
      <TouchableOpacity
        style={styles.card}
        onPress={() => this.props.onPress(this.props.meal)}>
        <View style={styles.infoContainer}>
          <Text style={styles.title}>
            {this.props.meal?.strMeal || 'No title'}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

MealCard.defaultProps = {
  meal: {},
  onPress: () => {},
};

export default MealCard;
