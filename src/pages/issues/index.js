import React, { Component } from 'react';
import { View, Text, ActivityIndicator, FlatList, TouchableOpacity, AsyncStorage } from 'react-native';
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
    filter: '',
    loading: true,
  };

  componentDidMount = async () => {
    this.getIssues();
    this.getFilter();
  };

  getIssues = async () => {
    const { repository } = this.props.navigation.state.params;
    const issues = await api.get(`/repos/${repository.owner.login}/${repository.name}/issues`);
    this.setState({ issues: issues.data, loading: false });
  }

  setFilter = async (filter) => {
    await AsyncStorage.setItem('@Github_Issues_Watcher:filter', filter);
    this.setState({ filter });
  }

  getFilter = async () => {
    const filter = await AsyncStorage.getItem('@Github_Issues_Watcher:filter');
    console.tron.log(filter);
    if (filter) {
      this.setState({ filter });
    }
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
    <View style={styles.filters}>
      <TouchableOpacity style={styles.filter} onPress={() => this.setFilter('Todas')}>
        <Text style={styles.filterText}>{'Todas'} </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filter} onPress={() => this.setFilter('Abertas')}>
        <Text style={styles.filterText}>{'Abertas'} </Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.filter} onPress={() => this.setFilter('Fechadas')}>
        <Text style={styles.filterText}>{'Fechadas'} </Text>
      </TouchableOpacity>
    </View>
  )

  renderList = () => (
    <FlatList
      data={this.state.issues}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      numColumns={1}
    />
  )

  renderIssue = () => (
    <View>
      {
        this.renderFilters()
      }
      <View>
        {
          this.renderList()
        }
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
