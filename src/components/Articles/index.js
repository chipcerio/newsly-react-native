import React, { PureComponent } from 'react';
import { FlatList, View } from 'react-native';
import PropTypes from 'prop-types';
import Item from './Item';
import Sources from './SourcesModal';

type Props = {
  // articles: any,
  onArticlePress: () => void,
  onSourcesClosed: () => void,
  onSourcesShown: boolean,
};

class Articles extends PureComponent<Props> {
  static defaultProps = {
    articles: PropTypes.array,
    onArticlePress: PropTypes.func.isRequired,
    onSourcesClosed: PropTypes.func.isRequired,
    onSourcesShown: PropTypes.bool.isRequired,
  };

  onClosed = () => {
    this.props.onSourcesClosed();
  };

  renderArticle = ({ item }) => <Item data={item} onArticlePress={this.props.onArticlePress} />;

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

export default Articles;
