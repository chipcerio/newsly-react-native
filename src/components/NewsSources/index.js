import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';

class NewsSources extends PureComponent {
  static propTypes = {
    sources: PropTypes.array.isRequired,
  };

  renderSourceItem = ({ item }) => <Item title={item.name} />;

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.sources}
          keyExtractor={item => item.id}
          renderItem={this.renderSourceItem}
        />
      </View>
    );
  }
}

export default NewsSources;
