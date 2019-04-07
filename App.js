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
        <View style={{flex: 1}}>
          <Header />
        </View>
        <View style={{flex: 7}}>
          <Content />
        </View>
        <View style={{flex: 0.8}}>
          <Footer />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});