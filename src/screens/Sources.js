import React, { Component } from 'react';
import { View } from 'react-native';
import SourceList from '../components/SourceList';

class Sources extends Component {
  static navigationOptions = { title: 'Sources' };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <SourceList />
      </View>
    );
  }
}

export default Sources;
