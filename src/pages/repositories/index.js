import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';

import styles from './styles';
import Header from './components/Header';
import RepositoryItem from './components/RepositoryItem';

class ListRepositories extends Component {
  static navigationOptions = {
    header: null,
  };

  state = {
    repositories: [],
    loading: false,
  }

  handleRepositories = (responseRepositories) => {
    const { repositories } = this.state;
    const newList = repositories;

    if (newList.filter(rep => rep.id === responseRepositories.data.id).length === 0) {
      newList.push(responseRepositories.data);
    }
    return newList;
  }

  doSearchListRepositories = (responseRepositories) => {
    if (responseRepositories.status !== 200) {
      return;
    }

    const list = this.handleRepositories(responseRepositories);
    this.setState({ repositories: list });
    console.tron.log(this.state.repositories);
  }

  handlerLoading = (status) => {
    this.setState({ loading: status });
  }

  renderListItem = ({ item }) => <RepositoryItem repository={item} />

  renderListRepositories = () => (
    <FlatList
      data={this.state.repositories}
      keyExtractor={item => String(item.id)}
      renderItem={this.renderListItem}
      numColumns={2}
      columnWrapperStyle={styles.columnContainer}
    />
  );

  render() {
    return (
      <View style={styles.container}>
        <Header getListRepositories={this.doSearchListRepositories} setLoading={this.handlerLoading} />
        <Text>{this.state.repositories.id}</Text>
        {
          this.state.loading ? <Text>Carregando</Text> : this.renderListRepositories()
        }
      </View>
    );
  }
}

export default ListRepositories;
