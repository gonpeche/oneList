// Vendors
import React from 'react';
import { YellowBox, StyleSheet, Text, View } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

// Components
import Input from './components/Input'
import Button from './components/Button'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.headerStyle}>
          <Text>oneList</Text>
        </View>
        <View style={styles.content}>
          <Text>Contenido</Text>
        </View>
        <View style={styles.footer}>
          <Button />
        </View>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: 'white',
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
  footer: {
    flex: 2
  }
}


