import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Articles from '../components/Articles';
import * as actions from '../actions';

class Home extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: 'Home',
    headerRight: (
      <TouchableOpacity
        onPress={() => {
          navigation.state.params.onPress();
        }}
      >
        <Text style={styles.headerButton}>Sources</Text>
      </TouchableOpacity>
    ),
  });

  state = {
    isSourcesShown: false,
    selectedSources: ['abc-news', 'wired'],
  };

  componentDidMount() {
    this.props.navigation.setParams({ onPress: this.onSourcesOpen });
    this.props.actions.getArticles('abc-news,wired');
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

  onSourcesSelected = id => {
    this.setState({
      selectedSources: this.state.selectedSources.push(id),
    });
  };

  render() {
    return (
      <View style={{ flex: 1 }}>
        <Articles
          articles={this.props.articles}
          onArticlePress={this.onArticlePress}
          selectedSources={this.state.selectedSources}
          sources={this.props.sources}
          onSourcesClosed={this.onSourcesClose}
          onSourcesShown={this.state.isSourcesShown}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  headerButton: {
    fontSize: 16,
    fontWeight: 'bold',
    paddingRight: 16,
    paddingLeft: 16,
    paddingTop: 4,
    paddingBottom: 4,
  },
});

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
