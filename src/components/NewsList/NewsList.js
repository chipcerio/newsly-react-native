import React, { Component } from 'react'
import { ScrollView } from 'react-native'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import NewsItem from '../NewsItem'
import * as actions from '../../actions'

class NewsList extends Component {
  componentWillMount() {
    this.props.actions.getArticles()
  }

  renderArticles() {
    return this.props.articles.map(article =>
      (<NewsItem
        key={article.title}
        urlToImage={article.urlToImage}
        title={article.title}
        description={article.description}
        source={article.source.name}
        publishedAt={article.publishedAt}
        navigation={this.props.navigation}
      />))
  }

  render() {
    return (
      <ScrollView>
        {this.renderArticles()}
      </ScrollView>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    articles: state.news.articles,
    empty: state.news.empty,
    onLoading: state.news.onLoading,
    onError: state.news.onError,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(actions, dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewsList)
