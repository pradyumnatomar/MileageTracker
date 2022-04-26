import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import PropTypes from 'prop-types';

const TitleChip = ({label, icon}) => {
  return (
    <View style={styles.chipWrapper}>
      <Image style={styles.icon} source={icon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

TitleChip.defaultProps = {
  label: '',
};

TitleChip.propTypes = {
  label: PropTypes.string,
};

export default TitleChip;
