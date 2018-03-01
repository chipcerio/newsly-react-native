import React from 'react';
import { StackNavigator } from 'react-navigation';
import Home from './src/screens/Home';
import Details from './src/screens/Details';

const RootStack = StackNavigator({
  Home: {
    screen: Home,
  },
  Details: {
    screen: Details,
  },
});

const App = () => (
  <RootStack />
);

export default App;
