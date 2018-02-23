import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from './src/components/Toolbar';
import NewsList from './src/components/NewsList';

class App extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <Toolbar title={'Newsly'}/>
        <NewsList/>
      </View>
    );
  }
}

export default App;