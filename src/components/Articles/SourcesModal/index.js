import React, { PureComponent } from 'react';
import { FlatList, View, Modal, Button } from 'react-native';
import PropTypes from 'prop-types';
import Item from '../../NewsSources/Item';
import styles from './styles';

class SourcesModal extends PureComponent {
  static propTypes = {
    visible: PropTypes.bool.isRequired,
    sources: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    onClosed: PropTypes.func.isRequired,
  };

  onCloseModal = () => {
    this.props.onClosed();
  };

  // required in android
  onRequestClose = () => {};

  renderSourceItem = ({ item }) => {
    const found = this.props.selected.find(element => element === item.id);
    if (found) {
      return <Item title={item.name} id={item.id} isSelected />;
    }
    return <Item title={item.name} id={item.id} />;
  };

  render() {
    const { visible, sources } = this.props;

    return (
      <Modal
        presentationStyle="pageSheet"
        animationType="slide"
        visible={visible}
        onRequestClose={this.onRequestClose}
      >
        <View style={styles.container}>
          <FlatList
            data={sources}
            keyExtractor={item => item.id}
            renderItem={this.renderSourceItem}
          />
          <Button title="Ok" onPress={this.onCloseModal} />
        </View>
      </Modal>
    );
  }
}

export default SourcesModal;
