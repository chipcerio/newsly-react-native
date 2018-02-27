import React from 'react';
import { View } from 'react-native';
import Toolbar from './src/components/Toolbar';
import NewsList from './src/components/NewsList';

const App = () => (
  <View style={{ flex: 1 }}>
    <Toolbar title="Newsly" />
    <NewsList />
  </View>
);

export default App;
