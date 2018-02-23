import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import axios from 'axios';
import NewsItem from './NewsItem';

class NewsList extends Component {
  state = {articles: []};

  componentDidMount() {
    axios.get('https://newsapi.org/v2/everything?sources=bloomberg&page=1&apiKey=')
      .then(response => this.setState({articles: response.data.articles}));
  }

  renderArticles() {
    return this.state.articles.map(article =>
      <NewsItem
        key={article.title}
        urlToImage={article.urlToImage}
        title={article.title}
        publishedAt={article.publishedAt}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderArticles()}
      </ScrollView>
    );
  }
}

export default NewsList;
