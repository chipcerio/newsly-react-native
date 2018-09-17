import React, { Component } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import styles from './styles';

class SourceItem extends Component {
  static propTypes = {
    // id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  };

  state = {
    selected: false,
  };

  onItemSelected = () => {
    this.setState({
      selected: !this.state.selected,
    });
  };

  render() {
    const { rootViewStyle, textViewStyle, selectedViewStyle, seltectedTextStyle } = styles;
    const { title } = this.props;
    const { selected } = this.state;

    return (
      <TouchableOpacity onPress={this.onItemSelected}>
        <View style={selected ? selectedViewStyle : rootViewStyle}>
          <Text style={selected ? seltectedTextStyle : textViewStyle}>{title}</Text>
        </View>
      </TouchableOpacity>
    );
  }
}

export default SourceItem;
