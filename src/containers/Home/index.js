import {View, Text, SafeAreaView} from 'react-native';
import React, {useEffect} from 'react';
import styles from './styles';
import {
  DataRow,
  TitleChip,
  FloatingButton,
  DrawerHeader,
} from '../../components';
import {ScrollView} from 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {saveOdometerData} from '../../redux/actionCreator';
import fuelIcon from '../../assets/fuel_blue.png';
import rupeeIcon from '../../assets/rupee_blue.png';
import meterBlueIcon from '../../assets/meter_blue.png';
import fuelWhiteIcon from '../../assets/fuel.png';
import meterIcon from '../../assets/meter.png';
import timelineWhiteIcon from '../../assets/timeline-white.png';
import calendarIcon from '../../assets/calendar_blue.png';
import rupeeWhiteIcon from '../../assets/rupee_blue.png';
import rupeeGrayIcon from '../../assets/rupee_gray.png';

const Home = props => {
  const {navigation} = props;

  const gas = () => (
    <>
      <TitleChip label="Gas" icon={fuelIcon} />
      <View style={[styles.cardWrapper]}>
        <DataRow
          leftLabel={'6.458 mi/l'}
          rightLabel={'Average fuel consumption'}
          icon={fuelWhiteIcon}
        />
        <DataRow
          leftLabel={'4.129 mi/l'}
          rightLabel={'Last fuel consumption'}
          icon={meterIcon}
        />
        <DataRow
          leftLabel={'$1.149'}
          rightLabel={'Last fuel price'}
          icon={timelineWhiteIcon}
        />
        <DataRow rightLabel={'2022-04-14 7 days ago'} showIcon={false} />
      </View>
    </>
  );

  const costs = () => (
    <>
      <TitleChip label="Costs" icon={rupeeIcon} />
      <View style={[styles.cardWrapper]}>
        <Text style={styles.cardTitle}>This Month</Text>
        <DataRow leftLabel={'$0.009'} rightLabel={'Gas'} icon={calendarIcon} />
        <DataRow
          leftLabel={'$1.149'}
          rightLabel={'Other costs'}
          icon={meterBlueIcon}
        />
        <TitleSeperator />
        <Text style={styles.cardTitle}>Previous Month</Text>
        <DataRow leftLabel={'$57.3'} rightLabel={'Gas'} icon={fuelIcon} />
        <DataRow
          leftLabel={'$0.0'}
          rightLabel={'Other costs'}
          icon={meterIcon}
        />
      </View>
    </>
  );

  const entries = () => (
    <>
      <TitleChip label="Entries" icon={meterIcon} />
      <View style={[styles.cardWrapper]}>
        <Text style={styles.cardTitle}>September 2021</Text>
        <DataRow
          leftLabel={'$44.495'}
          rightLabel={'Refueling'}
          icon={rupeeWhiteIcon}
        />
        <TitleSeperator />
        <Text style={styles.cardTitle}>July 2021</Text>
        <DataRow
          leftLabel={'$57.312'}
          rightLabel={'Refueling'}
          icon={rupeeGrayIcon}
        />
      </View>
    </>
  );

  return (
    <>
      <DrawerHeader navigation={navigation} />
      <SafeAreaView style={styles.container}>
        <ScrollView
          contentContainerStyle={{paddingHorizontal: 20, paddingBottom: 20}}>
          {gas()}
          {costs()}
          {entries()}
        </ScrollView>
        <FloatingButton />
      </SafeAreaView>
    </>
  );
};

function TitleSeperator() {
  return <View style={styles.titleSeperator} />;
}

export default Home;
