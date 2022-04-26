import React from 'react';
import {View, Text, Image} from 'react-native';
import fuelIcon from '../../../assets/fuel.png';
import meterIcon from '../../../assets/meter.png';
import styles from '../styles';
import commonStyles from '../../../commonStyles';
import {TitleSeperator} from './Seperator';

export const TimeLineItem = props => {
  const {item} = props;

  return (
    <View style={[commonStyles.flexRow]}>
      <View style={{alignItems: 'center', flex: 0.3}}>
        <View style={styles.indicatorLineShort} />
        <View style={styles.fuelIconWrapper}>
          <Image style={styles.fuelIcon} source={fuelIcon} />
        </View>
        <View style={styles.indicatorLineLong} />
      </View>
      <View style={{paddingLeft: 30, paddingRight: 10, flex: 1}}>
        <Text style={[commonStyles.txt16, {marginTop: 64}]}>Refueling</Text>
        <TitleSeperator />
        <View style={[commonStyles.flexRowCenter, commonStyles.flexJustifyBtw]}>
          <Text style={commonStyles.txt14}>{item.creationDate}</Text>
          <Text
            style={[
              commonStyles.txt14,
              {
                color: '#fff',
                fontWeight: '600',
              },
            ]}>
            {`$${item.totalCost}`}
          </Text>
        </View>
        <TitleSeperator />
        <View style={[commonStyles.flexRowCenter]}>
          <Image
            source={meterIcon}
            style={{
              height: 16,
              width: 16,
            }}
          />
          <Text
            style={[
              commonStyles.txt14,
              {marginLeft: 10},
            ]}>{`${item.distanceTravelled} mi`}</Text>
        </View>
      </View>
    </View>
  );
};
