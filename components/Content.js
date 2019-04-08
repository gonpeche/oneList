import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import AddListModal from './AddListModal'



export default class Content extends Component {
    openModal = () => {
        this.refs.addModal.showAddModal()
    }
    addList = () => {
        console.log('lista Agregada')
    }
    
    render() {
        return (
            <View  style={styles.container}>
                <AddListModal 
                    ref={'addModal'} 
                    parentFlatList={this} 
                    addList={this.addList}/>
                <ScrollView>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                            <Text>Contenido</Text>
                </ScrollView>                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 8,
    }
})


  