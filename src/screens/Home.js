import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import reducers from '../reducers'

class Home extends Component {
  static get navigationOptions() {
    return { title: 'Home', header: null }
  }

  render() {
    return (
      <Provider store={createStore(reducers)}>
        <View style={{ flex: 1 }}>
          <Header title="Newsly" />
          <NewsList navigation={this.props.navigation} />
        </View>
      </Provider>
    )
  }
}

export default Home
