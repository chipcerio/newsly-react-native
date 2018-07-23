import React, { Component } from 'react';
import { View, Button } from 'react-native';
import Articles from '../components/Articles';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => {
          navigation.state.params.onPress();
        }}
        title="Sources"
        color="rgb(0, 122, 255)"
      />
    ),
  });

  state = {
    isSourcesShown: false,
  };

  componentDidMount() {
    this.props.navigation.setParams({ onPress: this.onSourcesOpen });
  }

  onSourcesClose = () => {
    this.props.navigation.goBack();
  };

  onSourcesOpen = () => {
    this.setState({
      isSourcesShown: !this.state.isSourcesShown,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Articles
          navigation={this.props.navigation}
          onSourcesClosed={this.onSourcesClose}
          onSourcesShown={this.state.isSourcesShown}
        />
      </View>
    );
  }
}

export default Home;
