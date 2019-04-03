// Vendors
import React from 'react';
import { YellowBox, StyleSheet, Text, View } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

// Components
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'


export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  }
}


