import React, { Component } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Item from './Item';
import * as actions from '../../actions';
import Sources from './SourcesModal';

class Articles extends Component {
  componentDidMount() {
    this.props.actions.getArticles();
  }

  renderArticle = ({ item }) => (
    <Item
      urlToImage={item.urlToImage}
      title={item.title}
      description={item.description}
      source={item.source.name}
      publishedAt={item.publishedAt}
      navigation={this.props.navigation}
    />
  );

  render() {
    if (this.props.articles.length <= 0) {
      return <View />;
    }

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={this.props.articles}
          keyExtractor={item => item.title}
          renderItem={this.renderArticle}
        />
        <Sources visible={this.props.onSourcesShown} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.news.articles,
  empty: state.news.empty,
  onLoading: state.news.onLoading,
  onError: state.news.onError,
});

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
