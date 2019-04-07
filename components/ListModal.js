// import React, { Component } from 'react'
// import { View, Text } from 'react-native'
// import Modal from 'react-native-modal'
// import PropTypes from 'prop-types'

// const AddListModal = ({ isVisible, onBackDropPress }) => (
//     <View>
//     <Modal isVisible={true}>
//       <View style={{ flex: 1 }}>
//         <Text>I am the modal content!</Text>
//       </View>
//     </Modal>
//   </View>
//     // <Modal
//     //     isVisible={isVisible}
//     //     onBackdropPress={onBackDropPress}
//     // >
//     //     <View>
//     //         <Text>Hola</Text>
//     //     </View>
//     // </Modal>
// );

// AddListModal.propTypes = {
//     isVisible: PropTypes.bool,
//     onBackDropPress: PropTypes.func
// };

// export default AddListModal;


import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import Modal from "react-native-modal";

export default class AddListModal extends Component {
  state = {
    isModalVisible: false,
  };

  _toggleModal = () =>
    this.setState({ isModalVisible: !this.state.isModalVisible });

  render() {
    return (
      <View style={{ flex: 4 }}>

        <TouchableOpacity onPress={this._toggleModal}>
          <Text>Show Modal</Text>
        </TouchableOpacity>

        <Modal isVisible={this.state.isModalVisible}>
          <View style={{ flex: 1 }}>
            <Text>Hello!</Text>
            <TouchableOpacity onPress={this._toggleModal}>
              <Text>Hide me!</Text>
            </TouchableOpacity>
          </View>
        </Modal>

      </View>
    );
  }
}