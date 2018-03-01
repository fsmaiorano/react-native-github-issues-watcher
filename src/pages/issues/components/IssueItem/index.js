import React from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import Icon from 'react-native-vector-icons/FontAwesome';

import styles from './styles';

const trunc = text => (text.length > 25 ? `${text.substr(0, 25)}...` : text);

const IssueItem = ({ issue }) => (
  <View style={styles.container}>
    <View style={styles.containerImage}>
      <Image style={styles.avatar} source={{ uri: issue.user.avatar_url }} />
    </View>
    <View style={styles.containerText}>
      <Text style={styles.title}>{trunc(issue.title)}</Text>
      <Text style={styles.subTitle}>{issue.user.login}</Text>
    </View>
    <Icon name="angle-right" size={20} style={styles.icon} />
  </View>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
};

export default IssueItem;
