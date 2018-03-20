import React, { Component } from 'react'
import { View } from 'react-native'
import Header from '../components/Header'
import NewsList from '../components/NewsList'

class Home extends Component {
  static get navigationOptions() {
    return { title: 'Home', header: null }
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Header title="Newsly" />
        <NewsList navigation={this.props.navigation} />
      </View>
    )
  }
}

export default Home
