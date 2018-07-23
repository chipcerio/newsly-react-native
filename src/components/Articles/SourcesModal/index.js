import React, { PureComponent } from 'react';
import { Text, View, Modal, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

type Props = {
  visible: boolean,
};

export class SourcesModal extends PureComponent<Props> {
  static defaultProps = {
    visible: PropTypes.bool.isRequired,
  };

  render() {
    return (
      <Modal presentationStyle="formSheet" animationType="slide" visible={this.props.visible}>
        <View style={styles.container}>
          <Text>This is a Modal</Text>
        </View>
      </Modal>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default SourcesModal;
