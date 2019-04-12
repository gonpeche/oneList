import React, { PureComponent } from 'react'
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native'

export default class TotalLists extends PureComponent {
    _onPress = () => {
      this.props.onPressItem(this.props.id);
    };
  
    render() {
      return (
        <TouchableOpacity onPress={this._onPress}>
          <View style={styles.container}>
            <Text style={styles.text}>{this.props.title}</Text>
          </View>
        </TouchableOpacity>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      padding: 20,
      flexDirection: 'row',
      justifyContent: 'center',
      borderColor: 'black',
      borderWidth: 1,
      margin: 5
    },
    text: {
      color: 'red',
      fontSize: 21
    }
  });