import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';

class NewsItem extends Component {
  constructor(props) {
    super();
    this.image = props.urlToImage;
    this.title = props.title;
    this.date = moment(props.publishedAt).format('ddd, DD MMM');
    this.navigation = props.navigation;
  }

  onPress = () => this.props.navigation.navigate('Details');

  render() {
    return (
      <View style={styles.rootViewStyle}>
        <Image
          source={{ uri: this.image }}
          style={styles.imageViewStyle}
        />
        <View style={styles.textViewStyle}>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.titleStyle} numberOfLines={3}>{this.title}</Text>
            <Text style={styles.dateStyle}>{this.date}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

NewsItem.propTypes = {
  urlToImage: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  publishedAt: PropTypes.string.isRequired,
  navigation: PropTypes.object.isRequired,
};

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
    shadowOpacity: 0.4,
    shadowRadius: 2,
    elevation: 1,
  },
  imageViewStyle: {
    height: 128,
    width: 96,
  },
  textViewStyle: {
    justifyContent: 'center',
    paddingLeft: 8,
    paddingRight: 16,
    flex: 1,
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    flexWrap: 'wrap',
    marginRight: 16,
  },
  dateStyle: {
    color: 'grey',
    marginTop: 8,
  },
});

export default NewsItem;
