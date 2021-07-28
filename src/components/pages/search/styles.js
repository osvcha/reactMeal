import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.main},
  contentContainer: {
    paddingTop: 40,
  },
  statusbar: {
    backgroundColor: colors.main,
  },
  pageTitle: {
    fontSize: 36,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    fontFamily: 'System',
  },
  pageSubtitle: {
    fontSize: 18,
    color: colors.text,
    textAlign: 'center',
    fontFamily: 'System',
  },
});

export default styles;
