import React, {Component} from 'react';
import {Text, View} from 'react-native';
import Toolbar from './src/components/Toolbar';

class App extends Component {
  render() {
    return (
      <View>
        <Toolbar title={'Newsly'}/>
      </View>
    );
  }
}

export default App;