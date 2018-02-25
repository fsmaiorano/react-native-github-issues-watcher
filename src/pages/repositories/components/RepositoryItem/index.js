import React from 'react';
import { View, Text, Image } from 'react-native';

const RepositoryItem = ({ repository }) => (
  <View>
    <Text>{repository.id}</Text>
    <Text>{repository.name}</Text>
    <Image source={{ uri: repository.owner.avatar_url }} />
  </View>
);

export default RepositoryItem;
