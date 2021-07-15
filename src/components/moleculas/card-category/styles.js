import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../assets/colors';

const windowWidth = Dimensions.get('window').width;
const styles = StyleSheet.create({
  card: {
    width: windowWidth / 2,
    height: undefined,
    aspectRatio: 6 / 5,
  },

  image: {width: '100%', height: '75%', resizeMode: 'cover'},

  categoryName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
  },
});

export default styles;
