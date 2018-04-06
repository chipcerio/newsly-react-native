import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '../components/Header'
import NewsList from '../components/NewsList'

class Home extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Newsly" navigation={this.props.navigation} />
        <NewsList navigation={this.props.navigation} />
      </View>
    )
  }
}

export default Home
