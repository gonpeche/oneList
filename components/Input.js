import React, { Component } from 'react';
import { Text, TextInput, View } from 'react-native';

export default class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
        text: ''
    };
  }

  render() {
    return (
      <View style={{paddingLeft: 100, textAlign: 'center'}}>
        <TextInput
          style={{height: 90, fontSize: 22}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
    );
  }
}

