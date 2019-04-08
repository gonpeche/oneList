import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import AddListModal from './AddListModal'



export default class Content extends Component {
    addList = () => {
        this.refs.addModal.showAddModal()
      }
    
    render() {
        return (
            <View  style={styles.container}>
                <AddListModal ref={'addModal'} parentFlatList={this} />
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


  