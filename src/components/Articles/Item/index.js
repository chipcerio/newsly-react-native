import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import styles from './styles';

class Item extends Component {
  constructor(props) {
    super();
    this.image = props.urlToImage == null ? 'http://via.placeholder.com/128x96' : props.urlToImage;
    this.title = props.title;
    this.description = props.description;
    this.source = props.source;
    this.date = moment(props.publishedAt).format('ddd, DD MMM');
    this.navigation = props.navigation;
  }

  onPress = () =>
    this.props.navigation.navigate('Details', {
      title: this.title,
      description: this.description,
      source: this.source,
      image: this.image,
      date: this.date,
    });

  render() {
    const { rootViewStyle, imageViewStyle, textViewStyle, titleStyle, dateStyle } = styles;

    return (
      <View style={rootViewStyle}>
        <Image source={{ uri: this.image }} style={imageViewStyle} />
        <View style={textViewStyle}>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={titleStyle} numberOfLines={3}>
              {this.title}
            </Text>
            <Text style={dateStyle}>{this.date}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Item;
