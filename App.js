import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { YellowBox } from 'react-native';
import { Button } from 'react-native';
import Input from './components/Input'



export default class App extends React.Component {
  componentDidMount() {
    // YellowBox.ignoreWarnings(['Remote debugger']);

  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Text >oneList</Text>
        </View>
        <View style={styles.content}>
          <Text>Contenido</Text>
        </View>
        <View style={styles.button}>
          <Button
            onPress={() => console.log('hola')}
            title="Agregar Lista"
          />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'red',
    alignItems: 'stretch',
    textAlign: 'center'
  },
  headerStyle: {
    flex: 0.5,
    fontSize: 36,
    paddingTop: 40,
    // textAlign: 'center',
    fontWeight: '100',
    backgroundColor: 'yellow'
  },
  content: {
    flex: 10,
    backgroundColor: 'white'
  },
  button: {
    flex: 1,
    // justifyContent: 'flex-end',
    backgroundColor: 'gray',
    paddingBottom: 36
  }
}
