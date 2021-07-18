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
  row: {flexDirection: 'row', paddingVertical: 20, paddingHorizontal: 20},
  label: {fontSize: 18, color: colors.white},
  value: {
    fontSize: 18,
    color: colors.white,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'right',
  },
  edit: {
    marginVertical: 40,
  },
});

export default styles;
