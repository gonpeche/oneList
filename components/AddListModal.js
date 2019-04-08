import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

const screen = Dimensions.get('window')

export class AddListModal extends Component {
    showAddModal = () => {
        this.refs.myModal.open()
        console.log(this.refs)
    }
    render() {
    return (
        <Modal 
        style={{
            justifyContent: 'center',
            borderRadius: 30,
            shadowRadius: 10,
            width: screen.width - 100,
            height: screen.height 
        }}
        ref={"myModal"}
        position='center'
        backdrop={true}
        onClosed={() => {
            // alert('modal cerrado')
        }}
        >
        <Text>Agregar Lista</Text>
        </Modal>
    )
    }
}

export default AddListModal
