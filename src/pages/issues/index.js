import React, { Component } from 'react';
import { View, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import api from 'services/api';
import styles from './styles';

class Issues extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: `${navigation.state.params.repository.name}`,
    headerTitleStyle: { textAlign: 'center', alignSelf: 'center' },
    headerStyle: {
      backgroundColor: 'white',
    },
  });


  static propTypes = {
    repository: PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      avatar_url: PropTypes.string,
    }).isRequired,
    navigation: PropTypes.shape({
      state: PropTypes.shape,
    }).isRequired,
  };

  state = {
    issues: [],
  };

  componentDidMount = async () => {
    const getIssues = this.getIssues();
    console.tron.log(getIssues);
    this.setState({ issues: getIssues });
  };

  getIssues = async () => {
    const { repository } = this.props.navigation.state.params;
    const issues = await api.get(`/repos/${repository.owner.login}/${repository.name}/issues`);
    return issues;
  }

  render() {
    const { repository } = this.props.navigation.state.params;
    console.tron.log(repository);
    return (
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
  }
}


export default Issues;
