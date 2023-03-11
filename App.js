import React, {Component} from 'react';

import {NavigationContainer} from '@react-navigation/native';
import BottomTabs from './src/navigation/baseNav';

class MainApp extends Component {
  render() {
    return (
      <NavigationContainer>
        <BottomTabs/>
      </NavigationContainer>
    );
  }
}

export default MainApp;
