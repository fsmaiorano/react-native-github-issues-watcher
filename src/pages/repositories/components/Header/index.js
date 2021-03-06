import React, { Component } from 'react';
import { View, TextInput, TouchableOpacity, ActivityIndicator } from 'react-native';
import PropTypes from 'prop-types';
import api from 'services/api';
import Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


class Header extends Component {
  static propTypes = {
    setLoading: PropTypes.func.isRequired,
  }

  state = {
    search: '',
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
    this.handlerLoadings(true);
    this.setState({ loading: true });
    try {
      const listRepositories = await this.searchRepository(search);
      getListRepositories(listRepositories);
      this.handlerLoadings(false);
    } catch (err) {
      this.handlerLoadings(false);
    }
  };

  handlerLoadings = (status) => {
    const { setLoading } = this.props;
    this.setState({ loading: status });
    setLoading(status);
  }

  renderSearchButton = () => (
    <TouchableOpacity
      onPress={this.doSearch}
    >
      <Icon name="plus" size={16} style={styles.icon} />
    </TouchableOpacity>
  )

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

        {
      this.state.loading ? <ActivityIndicator style={styles.loading} /> : this.renderSearchButton()
        }

      </View>
    );
  }
}

export default Header;
