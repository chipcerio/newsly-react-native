import React, { Component } from 'react';
import { View, Button } from 'react-native';
import NewsList from '../components/NewsList';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => navigation.navigate('Sources')}
        title="Sources"
        color="rgb(0, 122, 255)"
      />
    ),
  });

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NewsList navigation={this.props.navigation} />
      </View>
    );
  }
}

export default Home;
