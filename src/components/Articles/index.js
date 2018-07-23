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
    this.props.actions.getSources();
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

    const { articles, sources, onSourcesShown } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <FlatList
          data={articles}
          keyExtractor={item => item.title}
          renderItem={this.renderArticle}
        />
        <Sources visible={onSourcesShown} data={sources} />
      </View>
    );
  }
}

const mapStateToProps = state => ({
  articles: state.news.articles,
  empty: state.news.empty,
  onLoading: state.news.onLoading,
  onError: state.news.onError,
  sources: state.source.sources,
});

// This basically allows us to dispatch actions from the components
// easily so we dont need to mess with using dispatch in the component's
// themselves. We can just call functions that will automatically
// dispatch actions to the store
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Articles);
