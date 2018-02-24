import React from 'react';
import { View, Text } from 'react-native';

import Header from './components/Header';

const ListRepositories = () => (
  <View>
    <Header />
    <Text>List Repositories</Text>
  </View>
);

ListRepositories.navigationOptions = {
  header: null,
};

export default ListRepositories;
