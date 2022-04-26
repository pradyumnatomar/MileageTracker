import {View, Pressable, Image, SafeAreaView} from 'react-native';
import React from 'react';
import hamburgerIcon from '../../assets/hamburger.png';
import styles from './styles';
import commonStyles from '../../commonStyles';

const DrawerHeader = props => {
  const {navigation} = props;
  const toggleDrawer = () => navigation?.toggleDrawer();

  return (
    <SafeAreaView style={commonStyles.headerWrapper}>
      <View style={{padding: 16}}>
        <Pressable onPress={toggleDrawer}>
          <Image source={hamburgerIcon} style={styles.icon} />
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default DrawerHeader;
