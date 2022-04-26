import {Pressable, Image} from 'react-native';
import React from 'react';
import plusIcon from '../../assets/plus.png';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withTiming,
} from 'react-native-reanimated';
import {useEffect} from 'react';

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

const FloatingButton = () => {
  const {navigate} = useNavigation();
  const rotationHook = useSharedValue('0deg');

  const goToRefuelScren = () => navigate('Refuel');

  const animatedStyle = useAnimatedStyle(() => {
    return {
      transform: [{rotate: rotationHook.value}],
    };
  });

  useEffect(() => {
    rotationHook.value = withRepeat(
      withTiming('180deg', {
        duration: 1000,
      }),
      -1,
      true,
    );
  }, []);

  return (
    <AnimatedPressable
      style={[styles.btnWrapper, animatedStyle]}
      onPress={goToRefuelScren}>
      <Image source={plusIcon} style={styles.plusIcon} />
    </AnimatedPressable>
  );
};

export default FloatingButton;
