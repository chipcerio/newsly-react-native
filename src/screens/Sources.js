import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '../components/Header';
import SourceList from '../components/SourceList';

class Sources extends Component {
  render() {
    return (
      <View>
        <Header title="Sources" />
        <SourceList />
      </View>
    )
  }
}

export default Sources
