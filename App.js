import React from 'react';
import AppNavigator from './app/AppNavigator';
//import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />

    </NavigationContainer>
  );
}
