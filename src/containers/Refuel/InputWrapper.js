import {View, Image} from 'react-native';
import React from 'react';
import styles from './styles';

const InputWrapper = props => {
  return (
    <View style={[commonStyles.flexRowCenter]}>
      <Image style={[styles.icon]} source={props.image} />
      {props.children}
    </View>
  );
};

export default InputWrapper;
