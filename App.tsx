/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './src/navigation/TabNavigator';
import AuthStackNavigator from './src/navigation/AuthStackNavigator';

const App = () => {
  return (
    <NavigationContainer>
      {/* <TabNavigator /> */}
      <AuthStackNavigator />
    </NavigationContainer>
  );
}

export default App;
