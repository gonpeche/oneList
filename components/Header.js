import React, { Component } from 'react'
import { YellowBox, StyleSheet, Text, View } from 'react-native';

export default class Header extends Component {
  render() {
    return (
        <View style={styles.headerStyle}>
            <Text style={styles.text}>oneList</Text>
        </View>
    )
  }
}

const styles = {
    headerStyle: {
        flex: 1,
        justifyContent: 'flex-end',
        backgroundColor: 'pink',
        alignItems: 'center',
      },
    text: {
        fontSize: 40,
        height: 50
    }
  }
  