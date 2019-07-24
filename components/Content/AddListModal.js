import React, { Component } from 'react';
import { Text, TextInput, Dimensions } from 'react-native';
import Modal from 'react-native-modalbox';
import Button from 'react-native-button';

const screen = Dimensions.get('window')

export class AddListModal extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newList: ''
        }
    }
    showAddModal = () => {
        this.refs.myModal.open()
    }
    render() {
    return (
        <Modal 
            style={{
                justifyContent: 'center',
                borderRadius: 30,
                shadowRadius: 10,
                width: screen.width - 100,
                height: 200
            }}
            ref={"myModal"}
            position='center'
            backdrop={true}
            onClosed={() => {
            // alert('modal cerrado')
            }}
        >
        <Text
            style={{
                fontSize: 16,
                fontWeight: 'bold',
                textAlign: 'center',
                marginTop: 40
            }}
        >Add List</Text>
        <TextInput 
            style={{
                height: 40,
                borderBottomColor: 'gray',
                marginLeft: 30,
                marginRight: 30,
                marginTop: 20,
                marginBottom: 10,
                borderBottomWidth: 1
            }}
            placeholder='Name'
            value={this.state.newList}
            onChangeText={(text) => this.setState({ newList: text})}
        />
        <Button
            containerStyle={{
                backgroundColor: 'mediumseagreen',
                padding: 8,
                height: 40,
                borderRadius: 5,
                padding: 8,
                marginLeft: 70,
                marginRight: 70
            }}
            style={{
                fontSize: 18,
                color: 'white'
            }}
            onPress={() => {
                console.log('hola')
                this.props.addList(this.state.newList)
                this.refs.myModal.close();
                }
            }
        >Accept</Button>
        </Modal>
    )
    }
}

export default AddListModal
