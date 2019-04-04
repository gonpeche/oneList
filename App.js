// Vendors
import React from 'react';
import { YellowBox, StyleSheet, Text, View } from 'react-native';
YellowBox.ignoreWarnings(['Remote debugger']);

// Components
import Content from './components/Content'
import Footer from './components/Footer'
import Header from './components/Header'
import AddListModal from './components/ListModal'


export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isAddListModalVisible: false
    }
  }
  componentDidMount() {
    this.handleShowAddListModal()
  }
  handleShowAddListModal = () => {
    this.setState({ isAddListModalVisible: true })
  }
  handleExitAddListModal = () => {
    this.setState({ isAddListModalVisible: false})
  }
  render() {
    return (
      <View style={styles.container}>
        <Header />
        <Content />
        <Footer />
        <AddListModal 
          isVisible={this.state.isAddListModalVisible}
          onBackDropPress={this.handleExitAddListModal}
        />
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
  }
}


