import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as actions from '../../actions'
import SourceItem from '../SourceItem/SourceItem'

class SourceList extends Component {
  componentWillMount() {
    this.props.actions.getSources()
  }

  renderSources() {
    return this.props.sources.map(source => <SourceItem key={source.id} title={source.name} />)
  }

  render() {
    return <ScrollView>{this.renderSources()}</ScrollView>
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
