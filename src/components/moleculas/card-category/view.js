import React, {Component} from 'react';
import {TouchableOpacity, Image, Text} from 'react-native';
import styles from './styles';

class CategoryCard extends Component {
  render() {
    const source = {uri: this.props.category.strCategoryThumb};

    return (
      <TouchableOpacity
        onPress={() => this.props.onPress(this.props.category)}
        style={styles.card}>
        <Image style={styles.image} source={source} />
        <Text style={styles.categoryName}>
          {this.props.category.strCategory}
        </Text>
      </TouchableOpacity>
    );
  }
}

CategoryCard.defaulProps = {
  category: {},
  onPress: () => {},
};

export default CategoryCard;
