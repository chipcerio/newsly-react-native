import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';
import moment from 'moment';

class Details extends React.Component {
  static navigationOptions = { title: 'Details', header: null };

  render() {
    const { imageStyle, textContainerStyle, dateTextStyle, titleStyle } = styles;

    const { params } = this.props.navigation.state;
    const { urlToImage, source, title, description, publishedAt } = params.data;

    const image = urlToImage === null ? 'http://via.placeholder.com/128x96' : urlToImage;
    const date = moment(publishedAt).format('ddd, DD MMM');
    const desc =
      description === null
        ? 'Lorem ipsum dolor sit amet, consectetur adipiscing elit'
        : description;
    const { name } = source;

    return (
      <View>
        <Image style={imageStyle} source={{ uri: image }} />

        <View style={textContainerStyle}>
          <Text style={dateTextStyle}>{date}</Text>
          <Text style={dateTextStyle}>{name}</Text>
        </View>

        <View style={textContainerStyle}>
          <Text style={titleStyle} numberOfLines={2}>
            {title}
          </Text>
        </View>

        <View style={textContainerStyle}>
          <Text style={dateTextStyle}>{desc}</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 256,
    width: null,
  },
  textContainerStyle: {
    paddingTop: 8,
    paddingBottom: 8,
    paddingLeft: 16,
    paddingRight: 16,
  },
  dateTextStyle: {
    fontSize: 16,
    color: 'grey',
  },
  titleStyle: {
    fontSize: 22,
    fontWeight: 'bold',
    flexWrap: 'wrap',
  },
});

export default Details;
