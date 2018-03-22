import React, { Component } from 'react'
import axios from 'axios'
import { ScrollView } from 'react-native'
import { NEWS_API } from 'react-native-dotenv'
import { connect } from 'react-redux'
import NewsItem from '../NewsItem'
import * as actions from '../../actions'

class NewsList extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] }
    this.props = props
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?sources=bloomberg&page=1&apiKey=${NEWS_API}`)
      .then(response => this.setState({ articles: response.data.articles }))
  }

  renderArticles() {
    return this.state.articles.map(article =>
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
    list: state.news.list, // destructure this
    empty: state.news.empty,
    onLoading: state.news.onLoading,
    onError: state.news.onError,
  }
}

export default connect(mapStateToProps, actions)(NewsList)
