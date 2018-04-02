import React from 'react'
import { StyleSheet, Image, Text, View } from 'react-native'

class Details extends React.Component {
  render() {
    const {
      imageStyle, textContainerStyle, dateTextStyle, titleStyle,
    } = styles

    const { params } = this.props.navigation.state
    const {
      date, source, title, description, image,
    } = params

    return (
      <View>
        <Image
          style={imageStyle}
          source={{ uri: image }}
        />

        <View style={textContainerStyle}>
          <Text style={dateTextStyle}>{date}</Text>
          <Text style={dateTextStyle}>{source}</Text>
        </View>

        <View style={textContainerStyle}>
          <Text style={titleStyle} numberOfLines={2}>{title}</Text>
        </View>

        <View style={textContainerStyle}>
          <Text style={dateTextStyle}>{description}</Text>
        </View>
      </View>
    )
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
})

export default Details
