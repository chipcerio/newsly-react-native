import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions';
import Item from './Item';

class NewsSources extends Component {
  componentDidMount() {
    this.props.actions.getSources();
  }

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

const mapStateToProps = state => ({
  sources: state.source.sources,
  empty: state.source.empty,
  onLoading: state.source.onLoading,
  onError: state.source.onError,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(NewsSources);
