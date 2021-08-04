import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {Provider} from 'react-redux';
import {Router, Scene, Stack, Tabs} from 'react-native-router-flux';
import HomeComponent from '../../pages/home';
import Meals from '../../pages/meals';
import Meal from '../../pages/meal';
import SearchComponent from '../../pages/search';
import SearchResult from '../../pages/SearchResult';
import colors from '../../../assets/colors';
import store from '../../../config/redux';
import TabIcon from '../../moleculas/tabIcon/tabIcon';

const navBarProps = {
  navigationBarStyle: {backgroundColor: colors.navBar},
  titleStyle: {color: colors.white},
  rightButtonTextStyle: {color: colors.white},
  backButtonTextStyle: {color: colors.white},
  backButtonTintColor: colors.white,
  backTitleEnabled: false,
  back: true,
};

const styles = StyleSheet.create({
  tabBarStyle: {
    backgroundColor: '#eee',
  },
  tabBarSelectedItemStyle: {
    backgroundColor: '#ddd',
  },
});

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene hideNavBar panHandlers={null}>
              <Tabs
                key="tabbar"
                routeName="tabbar"
                showLabel={false}
                tabBarPosition="bottom"
                tabBarStyle={styles.tabBarStyle}>
                <Stack
                  key="tab_1"
                  title="Meals"
                  iconName="home"
                  tabBarLabel="Meals"
                  icon={TabIcon}
                  inactiveBackgroundColor="#FFF"
                  activeBackgroundColor="#DDD">
                  <Scene
                    key="Home"
                    component={HomeComponent}
                    hideNavBar
                    initial
                  />
                  <Scene key="Meals" component={Meals} {...navBarProps} />
                  <Scene key="Meal" component={Meal} {...navBarProps} />
                </Stack>

                <Stack
                  key="tab_2"
                  title="Search"
                  iconName="search"
                  tabBarLabel="Search"
                  icon={TabIcon}
                  inactiveBackgroundColor="#FFF"
                  activeBackgroundColor="#DDD">
                  <Scene
                    key="Search"
                    component={SearchComponent}
                    hideNavBar
                    initial
                  />
                  <Scene
                    key="SearchResult"
                    component={SearchResult}
                    {...navBarProps}
                  />
                  <Scene key="MealSearch" component={Meal} {...navBarProps} />
                </Stack>
              </Tabs>
            </Scene>
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
