import React from 'react';
import { View, Text, Image } from 'react-native';

const RepositoryItem = ({ repository }) => (
  <View>
    <Text>{repository.id}</Text>
  </View>
);

export default RepositoryItem;
