import React from 'react';
import {Image, Text, Platform} from 'react-native';
import homeWhiteIcon from '../assets/home-white.png';
import homeGrayIcon from '../assets/home-gray.png';
import timelineWhiteIcon from '../assets/timeline-white.png';
import timelineGrayIcon from '../assets/timeline-gray.png';

export const getTabBarIcon = (route, focused) => {
  let icon;
  switch (route) {
    case 'HomeScreen':
      icon = focused ? homeWhiteIcon : homeGrayIcon;
      break;
    case 'Timeline':
      icon = focused ? timelineWhiteIcon : timelineGrayIcon;
      break;
  }

  return <Image style={commonStyles.headerIcon} source={icon} />;
};

export const getTabBarLabel = (route, focused) => {
  let text;
  switch (route) {
    case 'HomeScreen':
      text = 'Home';
      break;
    case 'Timeline':
      text = 'Timeline';
      break;
  }

  return (
    <Text
      style={{
        color: focused ? '#fff' : '#ffd',
        fontSize: 12,
        marginBottom: 4,
      }}>
      {text}
    </Text>
  );
};
