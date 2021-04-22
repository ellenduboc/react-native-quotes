import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';

import {TouchableOpacity} from 'react-native';

const Button = props => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <Icon name={props.iconName} size={45} color="#09FACC" />
    </TouchableOpacity>
  );
};

export default Button;
