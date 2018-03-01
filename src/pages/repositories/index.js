import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, TouchableOpacity, AsyncStorage } from 'react-native';
import PropTypes from 'prop-types';
import { NavigationActions } from 'react-navigation';

import styles from './styles';
import Header from './components/Header';
import RepositoryItem from './components/RepositoryItem';

class ListRepositories extends Component {
  static navigationOptions = {
    header: null,
  };

  static propTypes = {
    navigation: PropTypes.shape({
      dispatch: PropTypes.func,
    }).isRequired,
  };

  state = {
    repositories: [],
    loading: false,
    refreshing: false,
  }

  componentDidMount = async () => {
    await this.getRepositories();
  }

  getRepositories = async () => {
    this.setState({ refreshing: true });
    const repositories = await AsyncStorage.getItem('@Github_Issues_Watcher:repositories');
    if (repositories) {
      this.setState({ repositories: JSON.parse(repositories), refreshing: false });
    }
  }

  handleRepositories = (responseRepositories) => {
    const { repositories } = this.state;
    const newList = repositories;

    if (newList.filter(rep => rep.id === responseRepositories.data.id).length === 0) {
      newList.push(responseRepositories.data);
    }
    return newList;
  }

  saveRepository = async (repositories) => {
    console.tron.log(repositories);
    await AsyncStorage.setItem('@Github_Issues_Watcher:repositories', JSON.stringify(repositories));
  }

  doSearchListRepositories = async (responseRepositories) => {
    if (responseRepositories.status !== 200) {
      return;
    }

    const repositories = this.handleRepositories(responseRepositories);
    await this.saveRepository(repositories);
    this.setState({ repositories });
  }

  handlerLoading = (status) => {
    this.setState({ loading: status });
  }

  redirectToPage = (item) => {
    const navigateAction = NavigationActions.navigate({
      routeName: 'Issues',
      params: { repository: item },
      action: NavigationActions.navigate({ routeName: 'Issues' }),
    });
    this.props.navigation.dispatch(navigateAction);
  }

  renderListItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      onPress={() => this.redirectToPage(item)}
    >
      <RepositoryItem repository={item} />
    </TouchableOpacity>

  )

  renderListRepositories = () => (
    <FlatList
      data={this.state.repositories}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      numColumns={1}
      refreshing={this.state.refreshing}
      onRefresh={this.getRepositories}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <Header
          getListRepositories={this.doSearchListRepositories}
          setLoading={this.handlerLoading}
        />
        {
          this.state.loading ?
            <ActivityIndicator style={styles.loading} /> :
            this.renderListRepositories()
        }
      </View>
    );
  }
}

export default ListRepositories;
