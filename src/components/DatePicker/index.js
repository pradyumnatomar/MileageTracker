import React, {useState} from 'react';
import {Platform} from 'react-native';
import RNDateTimePicker from '@react-native-community/datetimepicker';

export default props => {
  const {isVisible, closePicker, initialDate, onDateConfirm, isTime} = props;

  return isVisible ? (
    <RNDateTimePicker
      testID="DateTimePicker"
      display={Platform.OS === 'ios' ? 'spinner' : 'default'}
      mode={isTime ? 'time' : 'date'}
      value={initialDate}
      onChange={onDateConfirm}
      // themeVariant="dark"
    />
  ) : null;
};
