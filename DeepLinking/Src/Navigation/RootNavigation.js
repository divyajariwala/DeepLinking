import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screen/HomeScreen';
import Details from '../Screen/Details';
const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home}  />
      <Stack.Screen name="Details" component={Details}  />
    </Stack.Navigator>
  );
}

export default RootNavigation;
