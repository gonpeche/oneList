// Vendors
import React from 'react';
import { YellowBox, StyleSheet, View } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

// Components
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import AddListModal from './components/AddListModal'


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

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});