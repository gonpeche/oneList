import React, { Component } from 'react'
import { Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>oneList</Text>
        </View>
    )
  }
}

const styles = {
    container: {
        flex: 1.5,
        justifyContent: 'flex-end',
        backgroundColor: 'pink',
        alignItems: 'center',
      },
    text: {
        fontSize: 40,
        height: 50
    }
  }
  