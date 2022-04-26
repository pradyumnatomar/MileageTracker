import React from 'react';
import {Image, Text, Platform} from 'react-native';
import {Home, Refuel, Timeline} from '../containers';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getTabBarIcon, getTabBarLabel} from './tabBarComponents';

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const BottomTabs = () => (
  <Tab.Navigator
    initialRouteName="HomeScreen"
    detachInactiveScreens={true}
    screenOptions={({route}) => ({
      headerShown: false,
      tabBarStyle: {
        backgroundColor: '#212121',
        height: Platform.OS === 'android' ? 60 : 90,
      },
      tabBarIcon: ({focused}) => getTabBarIcon(route.name, focused),
      tabBarLabel: ({focused}) => getTabBarLabel(route.name, focused),
    })}>
    <Tab.Screen name="HomeScreen" component={Home} />
    <Tab.Screen name="Timeline" component={Timeline} />
  </Tab.Navigator>
);

const Stacks = () => (
  <Stack.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Home" component={BottomTabs} />
    <Stack.Screen name="Refuel" component={Refuel} />
  </Stack.Navigator>
);

const DrawerStack = () => (
  <Drawer.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
    }}>
    <Drawer.Screen
      name="HomeDrawer"
      component={Stacks}
      options={{
        title: 'Home',
      }}
    />
    <Stack.Screen name="Refuel" component={Refuel} />
  </Drawer.Navigator>
);

export default function NavigationRoutes() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  );
}
