import React, { Component } from 'react';
import { View } from 'react-native';
import NewsSources from '../components/NewsSources';

class Sources extends Component {
  static navigationOptions = { title: 'Sources' };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NewsSources />
      </View>
    );
  }
}

export default Sources;
