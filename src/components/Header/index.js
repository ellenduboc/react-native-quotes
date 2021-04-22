import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import styles from './styles';
import {View, Text} from 'react-native';

// import { Container } from './styles';

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.headerText}>Seja Bem-vindo!</Text>
      <Icon name="menu" size={24} color="#FFFFFF" />
    </View>
  );
};

export default Header;
