import React, { Component } from 'react';
import { View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import NewsSources from '../components/NewsSources';
import * as actions from '../actions';

class Sources extends Component {
  static navigationOptions = { title: 'Sources' };

  componentDidMount() {
    this.props.actions.getSources();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <NewsSources sources={this.props.sources} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  sources: state.source.sources,
  onLoading: state.source.onLoading,
  onError: state.source.onError,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

const SourcesWithData = connect(mapStateToProps, mapDispatchToProps)(Sources);

export default SourcesWithData;
