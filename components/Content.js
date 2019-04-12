import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, FlatList } from 'react-native';
import AddListModal from './AddListModal'
import FlatListDemo from './FlatListDemo'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lists: [{name: 'a'}, {name: 'b'}],
            lista: []
        }
    }
    openModal = () => {
        this.refs.addModal.showAddModal()
    }
    addList = (listaName) => {
        const lista = {
            name: listaName
        }
        this.setState({ lista: [...this.state.lista, lista] })
    }
    
    
    render() {
        const listEmpty = this.state.lista ? this.state.lista[0] : null
        console.log(this.state.lista)
        return (
            <View  style={styles.container}>
                <AddListModal 
                    ref={'addModal'} 
                    parentFlatList={this} 
                    addList={this.addList}/>
                <ScrollView>
                    <FlatList
                        data={this.state.lista}
                        renderItem={({item}) => <Text>{item.name}</Text>}
                        keyExtractor={(item, index) => index.toString()}
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


  