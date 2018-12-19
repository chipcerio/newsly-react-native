import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';
import SourcesModal from './SourcesModal';

class Articles extends PureComponent {
  static propTypes = {
    articles: PropTypes.array.isRequired,
    onArticlePress: PropTypes.func.isRequired,
    selectedSources: PropTypes.array.isRequired,
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
          keyExtractor={(item, index) => index.toString()}
          renderItem={this.renderArticle}
        />
        <SourcesModal
          visible={onSourcesShown}
          sources={sources}
          selected={this.props.selectedSources}
          onClosed={this.onClosed}
        />
      </View>
    );
  }
}

export default Articles;
