import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const IssueItem = ({ issue }) => (
  <View style={styles.container}>
    <View style={styles.containerImage}>
      <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    </View>
    <View style={styles.containerText}>
      <Text style={styles.title}>{issue.title}</Text>
      <Text style={styles.subTitle}>{issue.user.login}</Text>
    </View>
  </View>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default IssueItem;
