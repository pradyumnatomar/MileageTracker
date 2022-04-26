import {View, Pressable, Image, SafeAreaView, Text} from 'react-native';
import React from 'react';
import backArrow from '../../assets/left_arrow_white.png';
import tick from '../../assets/tick_white.png';
import styles from './styles';
import commonStyles from '../../commonStyles';

export default function (props) {
  const {navigation, showRightIcon, onRightIconClick, onGoBack} = props;

  const goBack = () => (onGoBack ? onGoBack() : navigation.goBack());

  return (
    <SafeAreaView style={commonStyles.headerWrapper}>
      <View style={[commonStyles.pd16, commonStyles.flexRowCenter]}>
        <Pressable onPress={goBack}>
          <Image source={backArrow} style={commonStyles.headerIcon} />
        </Pressable>
        <Text style={styles.heading}>Refueling</Text>
        {showRightIcon ? (
          <Pressable
            onPress={onRightIconClick}
            style={commonStyles.setMarginLeft('auto')}>
            <Image source={tick} style={commonStyles.headerIcon} />
          </Pressable>
        ) : null}
      </View>
    </SafeAreaView>
  );
}
