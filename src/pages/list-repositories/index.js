import React, { Component } from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Header from './components/Header';

class ListRepositories extends Component {
  static navigationOptions = {
    header: null,
  };

  doSearchListRepositories = (repositories) => {
    if (repositories.status !== 200) {
      return;
    }

    console.tron.log(repositories);
  }

  render() {
    return (
      <View style={styles.container}>
        <Header getListRepositories={this.doSearchListRepositories} />
        <Text>List Repositories</Text>
      </View>
    );
  }
}

export default ListRepositories;
