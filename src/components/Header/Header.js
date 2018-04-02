import React, { Component } from 'react'
import { Text, View, Image } from 'react-native'
import styles from './styles'

class Header extends Component {
  render() {
    const { containerStyle, textStyle, imgStyle } = styles

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
        <Image
          source={require('../../images/ic_newspaper.png')}
          style={imgStyle}
        />
      </View>
    )
  }
}

export default Header
