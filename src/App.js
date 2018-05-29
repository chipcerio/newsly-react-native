import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import RootStack from './config/router';
import reducers from './reducers';

class App extends Component {
  render() {
    const store = createStore(reducers, applyMiddleware(thunk));
    return (
      <Provider store={store}>
        <RootStack />
      </Provider>
    );
  }
}

export default App;
