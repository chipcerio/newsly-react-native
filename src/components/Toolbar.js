import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Toolbar = (props) => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{props.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#3F51B5',
    height: 56,
    paddingLeft: 16,
    flexDirection: 'row',
    alignItems: 'center'
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white'
  }
});

export default Toolbar;
