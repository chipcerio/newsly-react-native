import React, { Component } from 'react'
import { Text, View } from 'react-native'
import styles from './styles'

class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>{this.props.title}</Text>
      </View>
    )
  }
}

export default Header
