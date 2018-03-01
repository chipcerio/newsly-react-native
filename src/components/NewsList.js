import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { NEWS_API } from 'react-native-dotenv';
import PropTypes from 'prop-types';
import axios from 'axios';
import NewsItem from './NewsItem';

class NewsList extends Component {
  constructor(props) {
    super();
    this.state = { articles: [] };
    this.props = props;
  }

  componentDidMount() {
    axios.get(`https://newsapi.org/v2/everything?sources=bloomberg&page=1&apiKey=${NEWS_API}`)
      .then(response => this.setState({ articles: response.data.articles }));
  }

  renderArticles() {
    return this.state.articles.map(article =>
      (<NewsItem
        key={article.title}
        urlToImage={article.urlToImage}
        title={article.title}
        publishedAt={article.publishedAt}
        navigation={this.props.navigation}
      />));
  }

  render() {
    return (
      <ScrollView>
        {this.renderArticles()}
      </ScrollView>
    );
  }
}

NewsList.propTypes = {
  navigation: PropTypes.object.isRequired,
};

export default NewsList;
