import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

class Details extends React.Component {
  static get navigationOptions() {
    return { title: 'Details', header: null };
  }

  render() {
    const {
      imageStyle, textContainerStyle, dateTextStyle, titleStyle,
    } = styles;

    return (
      <View>
        <Image
          style={imageStyle}
          source={{ uri: 'https://pbs.twimg.com/profile_images/948294484596375552/RyGNqDEM_400x400.jpg' }}
        />

        <View style={textContainerStyle}>
          <Text style={dateTextStyle}>05 Mar 2018</Text>
          <Text style={dateTextStyle}>Bloombert</Text>
        </View>

        <View style={textContainerStyle}>
          <Text style={titleStyle} numberOfLines={2}>
          3 Charts to Know: Top Sector Losers from Trumps Tariff
          </Text>
        </View>

        <View style={textContainerStyle}>
          <Text style={dateTextStyle}>
          US investors are steeling themselves for Donald Trumps expected sign-off.
          </Text>
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
