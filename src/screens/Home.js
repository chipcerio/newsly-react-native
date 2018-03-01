import React, { Component } from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import Toolbar from '../components/Toolbar';
import NewsList from '../components/NewsList';

class Home extends Component {
  static get navigationOptions() {
    return { title: 'Home', header: null };
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Toolbar title="Newsly" />
        <NewsList navigation={this.props.navigation} />
      </View>
    );
  }
}

Home.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default Home;
