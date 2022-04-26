import React from 'react';
import {View, Text, Image} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';

const DataRow = props => {
  const {leftLabel, rightLabel, icon, showIcon} = props;
  return (
    <View style={[styles.rowWrapper]}>
      {showIcon ? <Image style={[styles.icon]} source={icon} /> : null}
      <Text style={[styles.leftLabel]}>{leftLabel}</Text>
      <Text style={[styles.rightLabel]}>{rightLabel}</Text>
    </View>
  );
};

DataRow.defaultProps = {
  leftLabel: '',
  rightLabel: '',
  showIcon: true,
};

DataRow.propTypes = {
  leftLabel: PropTypes.string,
  rightLabel: PropTypes.string,
  showIcon: PropTypes.bool,
};

export default DataRow;
