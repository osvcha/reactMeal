import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Scene, Stack} from 'react-native-router-flux';
import HomeComponent from '../../pages/home';
import Meals from '../../pages/meals';
import Meal from '../../pages/meal';
import colors from '../../../assets/colors';
import store from '../../../config/redux';

const navBarProps = {
  navigationBarStyle: {backgroundColor: colors.navBar},
  titleStyle: {color: colors.white},
  rightButtonTextStyle: {color: colors.white},
  backButtonTextStyle: {color: colors.white},
  backButtonTintColor: colors.white,
  backTitleEnabled: false,
  back: true,
};

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="Home" component={HomeComponent} hideNavBar initial />
            <Scene key="Meals" component={Meals} {...navBarProps} />
            <Scene key="Meal" component={Meal} {...navBarProps} />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
