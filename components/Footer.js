import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import AddListModal from './AddListModal'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.addList = this.addList.bind(this)
    }
    addList = () => {
        console.log('hola')
        this.refs.addModal.showAddModal()
    }
    render() { 
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.addList()}>
                    <Text style={styles.button}> Add List </Text>
                </TouchableOpacity>
                <AddListModal
                    ref={'addModal'}
                    parentFlatList={this}
                >

                </AddListModal>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center'
    },
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 30,
        width: 200,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 0,
        textAlign:'center',
    },
})

