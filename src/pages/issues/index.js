import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Issues extends Component {
  render() {
     const { repository } = this.props.navigation.state.params;
     console.tron.log(repository)
    return (
      <View>
        <Text>{repository.name}</Text>
      </View>
    );
  }
};

export default Issues;
