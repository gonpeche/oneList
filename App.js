// Vendors
import React from 'react';
import { YellowBox, StyleSheet, View } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

// Components
import Content from './components/Content/Content'
import Footer from './components/Footer'
import Header from './components/Header'

export default class App extends React.Component {
  openModal = () => {
    this.refs.addModal.openModal()
  }
  
  render() {
    return (
      <View style={styles.container}>
          <Header />
          <Content ref={'addModal'}/>
          <Footer openModal={this.openModal} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 8
  }
});