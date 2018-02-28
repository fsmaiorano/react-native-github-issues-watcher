import React, { Component } from 'react';
import { View, Text, Button, ActivityIndicator, FlatList, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';
import api from 'services/api';
import styles from './styles';

import IssueItem from './components/IssueItem';

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
    loading: true,
  };

  componentDidMount = async () => {
    this.getIssues();
  };

  getIssues = async () => {
    const { repository } = this.props.navigation.state.params;
    const issues = await api.get(`/repos/${repository.owner.login}/${repository.name}/issues`);
    this.setState({ issues: issues.data, loading: false });
  }

  renderListItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => this.redirectToPage(item)}
    >
      <IssueItem issue={item} />
    </TouchableOpacity>

  )

  renderFilters = () => (
    <View>
      <Button
        transparent
        style={styles.nextContainer}
        title="oi"
      />
    </View>
  )

  renderIssue = () => (
    <View>

      <View>
        <FlatList
          data={this.state.issues}
          keyExtractor={item => String(item.id)}
          renderItem={this.renderListItem}
          numColumns={1}
        />
      </View>
    </View>
  )

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
