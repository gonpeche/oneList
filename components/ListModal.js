import React, { Component } from 'react'
import { View } from 'react-native'
import Modal from 'react-native-modal'
import PropTypes from 'prop-types'

const AddListModal = ({ isVisible, onBackDropPress }) => (
    <Modal
        isVisible={isVisible}
        onBackdropPress={onBackDropPress}
    >
        <View></View>
    </Modal>
);

AddListModal.propTypes = {
    isVisible: PropTypes.bool,
    onBackDropPress: PropTypes.func
};

export default AddListModal;