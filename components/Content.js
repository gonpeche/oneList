import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';

export default class Content extends Component {
    render() {
        return (
            <View style={styles.content}>
                <ScrollView>
                        <Text>Contenido</Text>
                </ScrollView>
            </View>
        )
    }
}

const styles = {
    content: {
      flex: 8,
      backgroundColor: 'gray'
    }
  }
  