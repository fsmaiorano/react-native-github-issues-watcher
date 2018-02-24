import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';
import Header from './components/Header';

const ListRepositories = () => (
  <View style={styles.container}>
    <Header />
    <Text>List Repositories</Text>
  </View>
);

ListRepositories.navigationOptions = {
  header: null,
};

export default ListRepositories;
