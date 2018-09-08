import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';
import Sources from './SourcesModal';

class Articles extends PureComponent {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    onArticlePress: PropTypes.func.isRequired,
    sources: PropTypes.array.isRequired,
    onSourcesClosed: PropTypes.func.isRequired,
    onSourcesShown: PropTypes.bool.isRequired,
  };

  onClosed = () => {
    this.props.onSourcesClosed();
  };

  renderArticle = ({ item }) => <Item data={item} onArticlePress={this.props.onArticlePress} />;

  render() {
    const { articles, sources, onSourcesShown } = this.props;
    if (articles.length <= 0) {
      return <View />;
    }
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

export default Articles;
