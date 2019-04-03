import React, { Component } from 'react'
import { View } from 'react-native';
import ActionButton from 'react-native-action-button';


export default class Footer extends Component {
    buildButton () {
        return (
            <View>
            <ActionButton
                onPress={() => console.log('esa')}
                buttonColor="rgba(231,76,60,1)" />
            </View>
        )
    }
    render() { 
        return (
            <View style={styles.footer}>
                {this.buildButton()}
            </View>
        )
    }
}

const styles = {
    footer: {
        backgroundColor: '#ffff',
        flex: 2,
        justifyContent: 'flex-start',
        alignItems: 'center'
    }
  }
