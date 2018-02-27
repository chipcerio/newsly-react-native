import React, { Component, PropTypes } from 'react';
import { StyleSheet, Text, View } from 'react-native';

class Toolbar extends Component {
  constructor(props) {
    super();
    this.title = props.title;
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.title}</Text>
      </View>
    );
  }
}

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    height: 64,
    paddingLeft: 16,
    paddingRight: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.4,
    elevation: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 16,
  },
  dummyStyle: {
    height: 50,
    width: 50,
    backgroundColor: 'skyblue',
  },
});

export default Toolbar;
