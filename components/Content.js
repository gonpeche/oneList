import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, FlatList } from 'react-native';
import AddListModal from './AddListModal'


export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [{ name: "Supermercado"}, { name: "Gimnasio"}]
        }
    }
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
                    <FlatList
                        data={[{key: 'a'}, {key: 'b'}]}
                        renderItem={({item}) => <Text>{item.key}</Text>}
                    />
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


  