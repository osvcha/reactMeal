import {StyleSheet, Platform} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.main,
    marginBottom: 10,
    borderBottomWidth: 1,
    borderBottomColor: colors.navBar,
    shadowColor: '#000',
    ...Platform.select({
      android: {
        elevation: 3,
      },
      ios: {
        shadowOpacity: 0.3,
        shadowOffset: {width: 0, height: 4},
        shadowRadius: 4,
      },
    }),
  },
  infoContainer: {flexDirection: 'row', padding: 20},
  title: {
    color: colors.text,
    fontWeight: 'bold',
    fontSize: 16,
    flex: 1,
  },
});

export default styles;
