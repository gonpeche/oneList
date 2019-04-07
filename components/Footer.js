import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export default class Footer extends Component {
    render() { 
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.handlPress}>
                    <Text style={styles.button}> Add List </Text>
                </TouchableOpacity>
                {/* <Button
                    onPress={() => console.log('esa')}
                    title="Add List"
                    color="#841584"
                    border='1px solid red'
                /> */}
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

