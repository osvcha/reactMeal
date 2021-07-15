import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {Router, Scene, Stack} from 'react-native-router-flux';
import HomeComponent from '../../pages/home';
import store from '../../../config/redux';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <Stack key="root">
            <Scene key="Home" component={HomeComponent} hideNavBar initial />
          </Stack>
        </Router>
      </Provider>
    );
  }
}

export default App;
