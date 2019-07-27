// @core
import React, { Component } from 'react';
import { Text, View, ScrollView, StyleSheet, FlatList,  } from 'react-native';
import firebase from '../../Firebase';

// @components
import AddListModal from './AddListModal'
import TotalLists from './TotalLists'


export default class Content extends Component {
    constructor(props) {
        super(props)
        this.state = {
            lista: []
        }
    }

    componentDidMount() {
        let lista;

        firebase.database().ref('/tasks').once('value').then(function(snapshot) {
            lista = Object.values(snapshot.val())
        }).then(() => {
            this.setState({ lista })
        })

    }
    
    openModal = () => { this.refs.addModal.showAddModal() }

    addList = (listaName) => {
        // REMOVE DATABASE:
        // firebase.database().ref(`/tasks/`).remove()

        var newPostKey = firebase.database().ref().child('posts').push().key;
        var updates = {};
        updates['/tasks/' + newPostKey] = listaName;
        firebase.database().ref().update(updates);

        console.log('nueva promise')

        firebase.database().ref('/tasks').once('value').then(function(snapshot) {
            lista = Object.values(snapshot.val())
        }).then(() => {
            this.setState({ lista })
        })


    }

    renderLista = ({item}) => (
        <TotalLists
          id={item.id}
          onPressItem={() => console.log('onPressItem')}
          title={item}
        />
      );
    
    render() {
        console.log('rendereado', this.state.lista)
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


  