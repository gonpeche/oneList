import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Footer extends Component {
    render() { 
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => this.props.openModal()}>
                    <Text style={styles.button}>Add</Text>
                </TouchableOpacity>
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
        alignItems: 'center',
        paddingBottom: 10,
        paddingTop: 10,
    },
    button: {
        backgroundColor: 'blue',
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 12,
        color: 'white',
        fontSize: 30,
        width: 100,
        fontWeight: 'bold',
        overflow: 'hidden',
        padding: 0,
        textAlign:'center',
    },
})

