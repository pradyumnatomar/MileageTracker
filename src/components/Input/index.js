import {View, Pressable, TextInput} from 'react-native';
import React, {useEffect, useState} from 'react';
import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import styles from './styles';

const Input = props => {
  const {
    value = '',
    inputStyle = {},
    onChangeText = () => {},
    containerStyle = {},
    hint = '',
    onPress = () => {},
    isDisabled = false,
    isWrapperEventEmmitter = false,
  } = props;
  const [isHintFloating, setIsHintFloating] = useState(false);
  const isFloating = useSharedValue(false);

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      top: withTiming(isFloating.value ? -7 : 28),
      left: withTiming(isFloating.value ? 20 : 30),
      zIndex: isFloating.value ? 99 : -2,
    };
  }, []);

  const onFocus = () => {
    !isHintFloating && setIsHintFloating(true);
  };

  const onBlur = () => {
    if (!value.toString().trim()) setIsHintFloating(false);
  };

  useEffect(() => {
    if (isHintFloating) isFloating.value = true;
    else isFloating.value = false;
  }, [isHintFloating]);

  useEffect(() => {
    if (value) onFocus();
    else onBlur();
  }, [value]);

  const children = () => (
    <>
      <TextInput
        value={value}
        editable={!isDisabled || !onPress}
        style={[styles.inputWrapper, inputStyle]}
        keyboardType="number-pad"
        onFocus={onFocus}
        onBlur={onBlur}
        onChangeText={onChangeText}
        onPressOut={onPress}
      />
      <Animated.Text style={[styles.floatingText, animatedTextStyle]}>
        {hint}
      </Animated.Text>
    </>
  );

  return isWrapperEventEmmitter ? (
    <Pressable style={containerStyle} onPress={onPress}>
      {children()}
    </Pressable>
  ) : (
    <View style={containerStyle}>{children()}</View>
  );
};

export default Input;
