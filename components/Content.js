import React, { Component } from 'react'
import { View, Text, ScrollView } from 'react-native';

export default class Content extends Component {
    render() {
        return (
            <ScrollView>
                <View style={styles.content}>
                    <Text>Contenido</Text>
                </View>
            </ScrollView>
        )
    }
}

const styles = {
    content: {
      flex: 1,
      backgroundColor: '#ffff'
    }
  }
  