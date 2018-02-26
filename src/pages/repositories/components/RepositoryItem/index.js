import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const RepositoryItem = ({ repository }) => (
  <View style={styles.container}>
    <View style={styles.containerImage}>
      <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
    </View>
    <View style={styles.containerText}>
      <Text style={styles.title}>{repository.name}</Text>
      <Text style={styles.subTitle}>{repository.owner.login}</Text>
    </View>
  </View>
);

RepositoryItem.propTypes = {
  repository: PropTypes.shape({
    name: PropTypes.string.isRequired,
    owner: PropTypes.shape({
      login: PropTypes.string.isRequired,
      avatar_url: PropTypes.string.isRequired,
    }),
  }).isRequired,
};

export default RepositoryItem;
