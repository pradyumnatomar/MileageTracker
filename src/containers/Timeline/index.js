import React from 'react';
import {View, Text, SafeAreaView, Pressable, FlatList} from 'react-native';
import styles from './styles';
import commonStyles from '../../commonStyles';
import {useSelector} from 'react-redux';
import {DrawerHeader, FloatingButton} from '../../components';
import {TimeLineItem} from './components';

const Timeline = props => {
  const {navigation} = props;
  const odometerData = useSelector(store => store.odometerReducer.odometerList);
  const isOdometerDateAvailable =
    odometerData && Object.keys(odometerData).length;

  const addData = () => navigation.navigate('Refuel');

  const emptyListComponent = () => (
    <Pressable
      onPress={addData}
      style={[
        commonStyles.flex1,
        commonStyles.pd16,
        styles.addDataCta,
        commonStyles.flexCenter,
      ]}>
      <Text style={{fontWeight: '600', fontSize: 18}}>Add Data</Text>
    </Pressable>
  );

  return (
    <>
      <DrawerHeader navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <FlatList
          style={commonStyles.flex1}
          contentContainerStyle={[{paddingVertical: 20}]}
          data={Object.keys(odometerData)}
          keyExtractor={item => item.toString()}
          ListEmptyComponent={emptyListComponent()}
          renderItem={({item}) => (
            <>
              <View style={[commonStyles.flexRow]}>
                <View style={{alignItems: 'center', flex: 0.3}}>
                  <View style={styles.indicatorCircle} />
                </View>
                <View style={{paddingLeft: 30, paddingRight: 10, flex: 1}}>
                  <Text style={styles.dateTxt}>{item}</Text>
                </View>
              </View>
              <FlatList
                data={odometerData[item]}
                keyExtractor={item =>
                  (
                    item.creationTime +
                    item.creationMonth +
                    item.distanceTravelled +
                    item.totalCost
                  ).toString()
                }
                renderItem={({item: listData}) => (
                  <TimeLineItem item={listData} />
                )}
              />
            </>
          )}
        />
        {isOdometerDateAvailable ? <FloatingButton /> : null}
      </SafeAreaView>
    </>
  );
};

export default Timeline;
