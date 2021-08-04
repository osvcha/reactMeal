import React, {useState, useCallback} from 'react';

import {SafeAreaView, StatusBar, Text, Button, View} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import SelectDropdown from 'react-native-select-dropdown';
import styles from './styles';

const SearchComponent = ({areas = [], ingredients = [], onAreaSubmit}) => {
  const [area, setArea] = useState('');
  //const [ingredient, setIngredient] = useState('');
  const [errors, setErrors] = useState({});

  const validateAreaForm = useCallback(() => {
    let valid = true;
    let newErrors = {};

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
          <View>
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

          <View style={styles.ingredientsView}>
            <SelectDropdown
              data={ingredients}
              onSelect={(selectedItem, index) => {
                setArea(selectedItem);
              }}
              defaultButtonText={'Select ingredient'}
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

            <Button title="Search by ingredient" onPress={onSubmitAreaForm} />
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default SearchComponent;
