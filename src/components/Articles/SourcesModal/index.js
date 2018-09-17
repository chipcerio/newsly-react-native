import React, { PureComponent } from 'react';
import { FlatList, View, Modal, Button } from 'react-native';
import PropTypes from 'prop-types';
import Item from '../../NewsSources/Item';
import styles from './styles';

class SourcesModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    data: PropTypes.array.isRequired,
    onClosed: PropTypes.func.isRequired,
  };

  onCloseModal = () => {
    this.props.onClosed();
  };

  // required in android
  onRequestClose = () => {};

  renderSourceItem = ({ item }) => <Item title={item.name} id={item.id} />;

  render() {
    const { visible, data } = this.props;

    return (
      <Modal
        presentationStyle="pageSheet"
        animationType="slide"
        visible={visible}
        onRequestClose={this.onRequestClose}
      >
        <View style={styles.container}>
          <FlatList data={data} keyExtractor={item => item.id} renderItem={this.renderSourceItem} />
          <Button title="Ok" onPress={this.onCloseModal} />
        </View>
      </Modal>
    );
  }
}

export default SourcesModal;
