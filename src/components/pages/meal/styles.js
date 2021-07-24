import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.main,
  },
  image: {
    width: '100%',
    height: undefined,
    resizeMode: 'cover',
  },
  mealTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: colors.text,
    fontFamily: 'System',
    paddingTop: 10,
    paddingLeft: 10,
    paddingBottom: 20,
  },
  mealInstructions: {
    fontSize: 16,
    color: colors.text,
    fontFamily: 'System',
    paddingTop: 25,
    paddingLeft: 20,
    paddingRight: 20,
    lineHeight: 22,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flexWrap: 'wrap',
    flex: 1,
    paddingLeft: 10,
    paddingBottom: 5,
  },
  bullet: {
    width: 10,
    fontWeight: 'bold',
  },
  bulletText: {
    flex: 1,
  },
  ingredient: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  quantity: {
    fontSize: 16,
  },
});

export default styles;
