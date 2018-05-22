import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class SourceItem extends Component {
  render() {
    const { rootViewStyle, textViewStyle } = styles

    return (
      <View style={rootViewStyle}>
        <Text style={textViewStyle}>{this.props.title}</Text>
      </View>
    )
  }
}

export default SourceItem
