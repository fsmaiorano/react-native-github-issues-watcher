import React, { Component } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import styles from './styles';

class Header extends Component {
  render() {
    return (
      <View style={styles.headerBox}>
        <TextInput
          placeholder="Adicionar Repositório"
          autoCorret={false}
          autoCapitalize="none"
          style={styles.input}
          underlineColorAndroid="rgba(0,0,0,0)"
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
