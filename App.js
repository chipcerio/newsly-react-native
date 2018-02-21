import React, { Component } from 'react';
import { View } from 'react-native';
import Toolbar from './src/components/Toolbar';
import NewsList from './src/components/NewsList';
import NewsItem from './src/components/NewsItem';

class App extends Component {
  render() {
    return (
      <View>
        <Toolbar title={'Newsly'}/>
        <NewsItem title={'Winters Olympics: GB women beat Canada to reach curling semi-finals.'}
                  subtitle={'Wed, 21 Feb'}/>
      </View>
    );
  }
}

export default App;