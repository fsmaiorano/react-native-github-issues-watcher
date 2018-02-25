import React from 'react';
import { View, Text, Image } from 'react-native';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View>
    <Text>{repository.id}</Text>
    <Text>{repository.name}</Text>
    <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
  </View>
);

export default RepositoryItem;
