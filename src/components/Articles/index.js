import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import Item from './Item';
import * as actions from '../../actions';
import Sources from './SourcesModal';

type Props = {
  onSourcesClosed: () => void,
  onSourcesShown: boolean,
};

class Articles extends PureComponent<Props> {
  static defaultProps = {
    onSourcesClosed: PropTypes.func.isRequired,
    onSourcesShown: PropTypes.bool.isRequired,
  };

  componentDidMount() {
    this.props.actions.getArticles();
    this.props.actions.getSources();
  }

  onClosed = () => {
    this.props.onSourcesClosed();
  };

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
        <Sources visible={onSourcesShown} data={sources} onClosed={this.onClosed} />
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
