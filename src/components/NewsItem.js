import React, { Component } from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';

// 'https://i.imgur.com/LL0kYjo.jpg'
class NewsItem extends Component {
  render() {
    return (
      <View style={styles.rootViewStyle}>
        <Image source={{uri: this.props.urlToImage}}
               style={styles.imageViewStyle}/>

        <View style={styles.textViewStyle}>
          <Text style={styles.titleStyle} numberOfLines={3}>{this.props.title}</Text>
          <Text style={styles.subtitleStyle}>{this.props.publishedAt}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  rootViewStyle: {
    flexDirection: 'row',
    marginRight: 16,
    marginLeft: 16,
    marginTop: 8,
    marginBottom: 4,
    borderRadius: 6,
    backgroundColor: '#fcfcfc',

    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 1,
  },
  imageViewStyle: {
    height: 128,
    width: 96
  },
  textViewStyle: {
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 16,
    flex: 1
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginRight: 16
  },
  subtitleStyle: {
    color: 'grey'
  }
});

export default NewsItem;
