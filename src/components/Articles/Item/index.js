import React, { Component } from 'react';
import { Image, View, Text, TouchableOpacity } from 'react-native';
import moment from 'moment';
import styles from './styles';

class Item extends Component {
  onPress = () => {
    this.props.onArticlePress(this.props.data);
  };

  render() {
    const { rootViewStyle, imageViewStyle, textViewStyle, titleStyle, dateStyle } = styles;
    const { urlToImage, title, publishedAt } = this.props.data;

    const image = urlToImage === null ? 'http://via.placeholder.com/128x96' : urlToImage;
    const date = moment(publishedAt).format('ddd, DD MMM');
    return (
      <View style={rootViewStyle}>
        <Image source={{ uri: image }} style={imageViewStyle} />
        <View style={textViewStyle}>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={titleStyle} numberOfLines={3}>
              {title}
            </Text>
            <Text style={dateStyle}>{date}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default Item;
