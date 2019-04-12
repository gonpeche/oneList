import React, { Component } from 'react'
import { Text, View, ScrollView, StyleSheet, FlatList,  } from 'react-native';
import AddListModal from './AddListModal'
import TotalLists from './TotalLists'

export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lista: [{name: 'Juntada finde'}, {name: 'Supermercado'}]
        }
    }
    openModal = () => { this.refs.addModal.showAddModal() }
    addList = (listaName) => {
        const lista = {
            name: listaName
        }
        this.setState({ lista: [...this.state.lista, lista] })
    }
    renderLista = ({item}) => (
        <TotalLists
          id={item.id}
          onPressItem={() => console.log('onPressItem')}
          title={item.name}
        />
      );
    
    render() {
      return (
            <View  style={styles.container}>
                <AddListModal 
                    ref={'addModal'} 
                    parentFlatList={this} 
                    addList={this.addList}/>
                <ScrollView>
                    <View style={{flex: 1}}>
                      <FlatList
                          data={this.state.lista}
                          renderItem={this.renderLista}
                          keyExtractor={(item, index) => index.toString()}
                      />
                    </View>
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


  