import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Toolbar from './src/components/Toolbar';
import NewsList from './src/components/NewsList';

class App extends Component {
  render() {
    return (
      <View>
        <Toolbar title={'Newsly'}/>
        <NewsList/>
      </View>
    );
  }
}

export default App;