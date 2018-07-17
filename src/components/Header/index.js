import React, { Component } from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import styles from './styles';

class Header extends Component {
  onPress = () => this.props.navigation.navigate('Sources', {});

  render() {
    const { containerStyle, textStyle, imgStyle } = styles;

    return (
      <View style={containerStyle}>
        <Text style={textStyle}>{this.props.title}</Text>
        <TouchableOpacity onPress={this.onPress}>
          <Image source={require('../../images/ic_newspaper.png')} style={imgStyle} />
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
