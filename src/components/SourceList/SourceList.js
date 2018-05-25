import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import SourceItem from '../SourceItem/SourceItem'

class SourceList extends Component {
  componentDidMount() {
    this.props.actions.getSources()
  }

  renderSourceItem = ({ item }) => <SourceItem title={item.name} />

  render() {
    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.sources}
          keyExtractor={item => item.id}
          renderItem={this.renderSourceItem}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    sources: state.source.sources,
    empty: state.source.empty,
    onLoading: state.source.onLoading,
    onError: state.source.onError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SourceList)
