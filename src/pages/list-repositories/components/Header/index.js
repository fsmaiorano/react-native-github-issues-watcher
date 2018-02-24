import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

const Header = () => (
  <View style={styles.headerBox}>
    <TextInput
      placeholder="Adicionar Repositório"
      autoCorret={false}
      autoCapitalize="none"
      style={styles.input}
      underlineColorAndroid="rgba(0,0,0,0)"
    />
    <Text>dasdsa</Text>
  </View>
);

export default Header;
