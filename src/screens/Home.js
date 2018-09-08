import React, { Component } from 'react';
import { View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Articles from '../components/Articles';
import * as actions from '../actions';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <Button
        onPress={() => {
          navigation.state.params.onPress();
        }}
        title="Sources"
        color="rgb(0, 122, 255)"
      />
    ),
  });

  state = {
    isSourcesShown: false,
  };

  componentDidMount() {
    this.props.navigation.setParams({ onPress: this.onSourcesOpen });
    this.props.actions.getArticles();
    this.props.actions.getSources();
  }

  onSourcesClose = () => {
    this.setState({
      isSourcesShown: false,
    });
  };

  onArticlePress = data => {
    this.props.navigation.navigate('Details', { data });
  };

  onSourcesOpen = () => {
    this.setState({
      isSourcesShown: !this.state.isSourcesShown,
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Articles
          articles={this.props.articles}
          onArticlePress={this.onArticlePress}
          sources={this.props.sources}
          onSourcesClosed={this.onSourcesClose}
          onSourcesShown={this.state.isSourcesShown}
        />
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

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(actions, dispatch),
});

const HomeWithData = connect(mapStateToProps, mapDispatchToProps)(Home);

export default HomeWithData;
