import {NavigationContainer} from '@react-navigation/native';
import React, {Component} from 'react';
import {View, Text} from 'react-native';

const config = {
  screens: {
    Home: 'Home',
    Details: 'details/:userId',
  },
};

const linking = {
  prefixes: ['mychat://'],
  config,
};

function App() {
  return (
    <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
      {/* content */}
    </NavigationContainer>
  );
}

export default App;
