import { NavigationContainer } from '@react-navigation/native';
import React, { Component } from 'react';
import { View, Text } from 'react-native';
import RootNavigation from './Src/Navigation/RootNavigation';
import linking from './Src/Config/linking';
// const config = {
//   screens: {
//     Home: 'Home',
//     Details: 'details/:userId',
//   },
// };

// const linking = {
//   prefixes: ['mychat://'],
//   config,
// };

function App() {
  return (
    <NavigationContainer uriPrefix={linking} fallback={<Text>Loading...</Text>}>
      <RootNavigation />
    </NavigationContainer>
  );
}

export default App;
