import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SourceItem extends Component {
  static propTypes = {
    id: PropTypes.string.isRequired, // eslint-disable-line react/no-unused-prop-types
    title: PropTypes.string.isRequired,
    isSelected: PropTypes.bool,
  };

  static defaultProps = {
    isSelected: false,
  };

  state = {
    selected: this.props.isSelected,
  };

  onItemSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    const { defaultViewStyle, defaultTextStyle, selectedViewStyle, seltectedTextStyle } = styles;
    const { title, isSelected } = this.props;

    let selectable;
    if (isSelected) {
      selectable = (
        <View style={selectedViewStyle}>
          <Text style={seltectedTextStyle}>{title}</Text>
        </View>
      );
    } else {
      selectable = (
        <View style={defaultViewStyle}>
          <Text style={defaultTextStyle}>{title}</Text>
        </View>
      );
    }
    return <TouchableOpacity onPress={this.onItemSelected}>{selectable}</TouchableOpacity>;
  }
}

export default SourceItem;
