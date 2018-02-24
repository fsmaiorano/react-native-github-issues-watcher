import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import api from 'services/api';
import styles from './styles';

class Header extends Component {
  state = {
    search: 'rocketseat/rocketseat.com.br',
    loading: false,
  };

  searchRepository = async (search) => {
    const repository = await api.get(`/repos/${search}`);
    return repository;
  };

  doSearch = async () => {
    const { getListRepositories } = this.props;
    const { search } = this.state;

    if (search.length === 0) return;

    this.setState({ loading: true });
    try {
      const listRepositories = await this.searchRepository(search);
      getListRepositories(listRepositories);
    } catch (err) {
      this.setState({ loading: false });
    }
  };

  render() {
    return (
      <View style={styles.headerBox}>
        <TextInput
          placeholder="Adicionar Repositório"
          autoCorret={false}
          autoCapitalize="none"
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0)"
          value={this.state.search}
          onChangeText={search => this.setState({ search })}
        />
        <TouchableOpacity
          onPress={this.doSearch}
        >
          <Text style={styles.button}>Pesquisar</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Header;
