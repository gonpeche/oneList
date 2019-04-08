// Vendors
import React from 'react';
import { YellowBox, StyleSheet, View } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

// Components
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
// import AddListModal from './components/AddListModal'


export default class App extends React.Component {
  addList = () => {
    this.refs.addModal.openModal()
  }

  render() {
    return (
      <View style={styles.container}>

          <Header />
            <Content ref={'addModal'}/>

          <Footer 
            addList={this.addList}
          />

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