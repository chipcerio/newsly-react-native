import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import ReduxThunk from 'redux-thunk'
import Header from '../components/Header'
import NewsList from '../components/NewsList'
import reducers from '../reducers'

class Home extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))

    return (
      <Provider store={store}>
        <View style={{ flex: 1 }}>
          <Header title="Newsly" navigation={this.props.navigation} />
          <NewsList navigation={this.props.navigation} />
        </View>
      </Provider>
    )
  }
}

export default Home
