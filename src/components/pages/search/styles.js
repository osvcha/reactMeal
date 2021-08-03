import {StyleSheet} from 'react-native';
import colors from '../../../assets/colors';

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.main},
  containerForm: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.main,
    paddingTop: 20,
  },
  contentContainer: {
    paddingTop: 40,
  },
  statusbar: {
    backgroundColor: colors.main,
  },
  labelForm: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.text,
    textAlign: 'center',
    fontFamily: 'System',
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
  dropdown: {
    alignItems: 'center',
  },
  dropdown1BtnStyle: {
    width: '80%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#444',
  },
  dropdownBtnTxtStyle: {color: '#444', textAlign: 'left'},
  dropdownDropdownStyle: {backgroundColor: '#EFEFEF'},
  dropdownRowStyle: {
    backgroundColor: '#EFEFEF',
    borderBottomColor: '#C5C5C5',
  },
  dropdownRowTxtStyle: {color: '#444', textAlign: 'left'},
});

export default styles;
