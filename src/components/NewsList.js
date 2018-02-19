import React, { Component } from 'react';
import { View } from 'react-native';
import axios from 'axios';

class NewsList extends Component {
  state = {articles: []};

  componentWillMount() {
    axios.get('https://newsapi.org/v2/everything?sources=bloomberg&page=1&apiKey=')
      .then(response => this.setState({articles: response.data.articles}));
  }

  render() {
    console.log(this.state);
    return (
      <View/>
    );
  }
}

export default NewsList;
