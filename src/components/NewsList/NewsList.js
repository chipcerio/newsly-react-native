import React, { Component } from 'react'
import { FlatList, View } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NewsItem from '../NewsItem'
import * as actions from '../../actions'

class NewsList extends Component {
  componentDidMount() {
    this.props.actions.getArticles()
  }

  renderArticle = ({ item }) => (
    <NewsItem
      urlToImage={item.urlToImage}
      title={item.title}
      description={item.description}
      source={item.source.name}
      publishedAt={item.publishedAt}
      navigation={this.props.navigation}
    />
  )

  render() {
    if (this.props.articles.length <= 0) {
      return <View />
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.articles}
          keyExtractor={item => item.title}
          renderItem={this.renderArticle}
        />
      </View>
    )
  }
}

const mapStateToProps = state => {
  return {
    articles: state.news.articles,
    empty: state.news.empty,
    onLoading: state.news.onLoading,
    onError: state.news.onError,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
