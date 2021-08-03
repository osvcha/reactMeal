import React, {useState, useCallback} from 'react';

import {SafeAreaView, StatusBar, Text, Button, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

const SearchComponent = ({areas = [], onAreaSubmit}) => {
  const [area, setArea] = useState('');
  const [errors, setErrors] = useState({});

  const validateAreaForm = useCallback(() => {
    let valid = true;
    let newErrors = {};
    console.log('validateAreaForm:');
    console.log(area);
    if (!area) {
      newErrors.area = 'campo obligatorio';
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  }, [area]);

  const onSubmitAreaForm = useCallback(() => {
    const valid = validateAreaForm();
    if (!valid) {
      return;
    }

    const data = {
      area: area,
    };

    onAreaSubmit(data);
  }, [area, onAreaSubmit, validateAreaForm]);

  return (
    <>
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView style={styles.container}>
        <StatusBar animated={true} barStyle="default" />
        <Text style={styles.pageTitle}>ReactMeal</Text>
        <Text style={styles.pageSubtitle}>Search recipes</Text>

        <View style={styles.containerForm}>
          <SelectDropdown
            data={areas}
            //defaultValueByIndex={1}
            // defaultValue={'Egypt'}
            onSelect={(selectedItem, index) => {
              setArea(selectedItem);
            }}
            defaultButtonText={'Select area'}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
            buttonStyle={styles.dropdownBtnStyle}
            buttonTextStyle={styles.dropdownBtnTxtStyle}
            renderDropdownIcon={() => {
              return (
                <FontAwesome name="chevron-down" color={'#444'} size={18} />
              );
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={styles.dropdownDropdownStyle}
            rowStyle={styles.dropdownRowStyle}
            rowTextStyle={styles.dropdownRowTxtStyle}
          />

          <Button title="Search by area" onPress={onSubmitAreaForm} />
        </View>
      </SafeAreaView>
    </>
  );
};

export default SearchComponent;
