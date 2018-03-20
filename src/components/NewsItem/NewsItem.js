import React, { Component } from 'react'
import { Image, View, Text, TouchableOpacity } from 'react-native'
import moment from 'moment'
import styles from './styles'

class NewsItem extends Component {
  constructor(props) {
    super();
    this.image = props.urlToImage
    this.title = props.title
    this.description = props.description
    this.source = props.source
    this.date = moment(props.publishedAt).format('ddd, DD MMM')
    this.navigation = props.navigation
  }

  onPress = () => this.props.navigation.navigate('Details', {
    title: this.title,
    description: this.description,
    source: this.source,
    image: this.image,
    date: this.date,
  })

  render() {
    return (
      <View style={styles.rootViewStyle}>
        <Image
          source={{ uri: this.image }}
          style={styles.imageViewStyle}
        />
        <View style={styles.textViewStyle}>
          <TouchableOpacity onPress={this.onPress}>
            <Text style={styles.titleStyle} numberOfLines={3}>{this.title}</Text>
            <Text style={styles.dateStyle}>{this.date}</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

export default NewsItem
