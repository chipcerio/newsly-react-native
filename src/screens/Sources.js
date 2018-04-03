import React, { Component } from 'react'
import { View } from 'react-native'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducers from '../reducers'
import Header from '../components/Header';
import SourceList from '../components/SourceList';

class Sources extends Component {
  render() {
    const store = createStore(reducers, {}, applyMiddleware(thunk))

    return (
      <Provider store={store}>
        <View>
          <Header title="Sources" />
          <SourceList />
        </View>
      </Provider>
    )
  }
}

export default Sources
