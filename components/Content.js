import React, { Component } from 'react'
import { View, Text } from 'react-native';

export default class Content extends Component {
    render() {
        return (
            <View style={styles.content}>
                <Text>Contenido</Text>
            </View>
        )
    }
}

const styles = {
    content: {
      flex: 10,
      backgroundColor: '#ffff'
    }
  }
  