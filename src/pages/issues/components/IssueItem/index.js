import React from 'react';
import { View, Text } from 'react-native';
import PropTypes from 'prop-types';

const IssueItem = ({ issue }) => (
  <View>
    <Text>{issue.title}</Text>
  </View>
);

IssueItem.propTypes = {
  issue: PropTypes.shape({
    title: PropTypes.string,
  }).isRequired,
}

export default IssueItem;
