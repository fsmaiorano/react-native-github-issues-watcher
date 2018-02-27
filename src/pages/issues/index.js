import React, { Component } from 'react';
import { View, Text, Image, ActivityIndicator } from 'react-native';
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
    navigation: PropTypes.shape({
      state: PropTypes.shape({
        params: PropTypes.shape({
          repository: PropTypes.shape({
            name: PropTypes.string,
            owner: PropTypes.shape({
              login: PropTypes.string,
            }),
            avatar_url: PropTypes.string,
          }),
        }),
      }),
    }).isRequired,
  };

  state = {
    issues: [],
    repository: {},
    loading: true,
  };

  componentDidMount = async () => {
    this.getIssues();
    this.getRepository();
  };

  getRepository = () => {
    const { repository } = this.props.navigation.state.params;
    this.setState({ repository });
  }

  getIssues = async () => {
    const { repository } = this.props.navigation.state.params;
    const issues = await api.get(`/repos/${repository.owner.login}/${repository.name}/issues`);
    this.setState({ issues: issues.data, loading: false });
  }

  renderIssue = () => {
    const { repository, issues } = this.state;
    console.tron.log(issues);
    console.tron.log(repository);
    return (
      <View>
        {
          issues && issues.map(issue => (
            <View>
              <View style={styles.container}>
                <View style={styles.containerImage}>
                  <Image style={styles.avatar} source={{ uri: repository.owner.avatar_url }} />
                </View>
              </View>
              <View style={styles.containerText}>
                <Text style={styles.title}>{issue.title}</Text>
                <Text style={styles.subTitle}>{issue.user.login}</Text>
              </View>
            </View>
          ))
        }
      </View>
    );
  }

  render() {
    return (
      <View>
        {
        this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderIssue()
      }
      </View>
    );
  }
}


export default Issues;
