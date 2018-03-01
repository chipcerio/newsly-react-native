import React from 'react';
import { Text, View } from 'react-native';

class Details extends React.Component {
  static get navigationOptions() {
    return { title: 'Details', header: null };
  }

  render() {
    return (
      <View>
        <Text>Details Screen</Text>
      </View>
    );
  }
}

export default Details;
