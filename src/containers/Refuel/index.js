import React, {useCallback, useEffect, useState} from 'react';
import {
  View,
  Platform,
  SafeAreaView,
  ScrollView,
  Image,
  Alert,
} from 'react-native';
import styles from './styles';
import commonStyles from '../../commonStyles';
import {useDispatch, useSelector} from 'react-redux';
import {DatePicker, Header, Input} from '../../components';
import {saveOdometerData} from '../../redux/actionCreator';
import calendarIcon from '../../assets/calendar_blue.png';
import ruppeeIcon from '../../assets/rupee_blue.png';
import fuelIcon from '../../assets/fuel_blue.png';
import meterIcon from '../../assets/meter_blue.png';
import getMinimumTwoDigits from '../../utilities/getMinimumTwoDigits';
import getMonthName from '../../utilities/getMonthName';
import InputWrapper from './InputWrapper';
import {useFocusEffect} from '@react-navigation/native';

const Refuel = props => {
  const {navigation} = props;
  const dispatch = useDispatch();
  const odometerData = useSelector(store => store.odometerReducer.odometerList);
  const [hasEditingStarted, setHasEditingStarted] = useState(false);
  const [isEditingComplete, setIsEditingComplete] = useState(false);
  const [odometer, setOdometer] = useState('');
  const [gas, setGas] = useState('');
  const [pricePerL, setPricePerL] = useState('');
  const [totalCost, setTotalCost] = useState('');
  const [currentDate, setCurrentDate] = useState(new Date());
  const [currentTime, setCurrentTime] = useState(new Date());
  const [isDatePickerVisible, setIsDatePickerVisible] = useState(false);
  const [isTimePckerVisible, setIsTimePckerVisible] = useState(false);

  useFocusEffect(
    useCallback(() => {
      setHasEditingStarted(false);
      setIsEditingComplete(false);
      setOdometer('');
      setPricePerL('');
      setTotalCost('');
      setCurrentDate(new Date());
      setCurrentTime(new Date());
    }, []),
  );

  useEffect(() => {
    if (
      odometer &&
      gas &&
      pricePerL &&
      totalCost &&
      currentTime &&
      currentDate
    ) {
      setIsEditingComplete(true);
    }
  }, [odometer, gas, pricePerL, totalCost, currentTime, currentDate]);

  const editingStarted = () => !hasEditingStarted && setHasEditingStarted(true);

  const toggleDatePicker = val => setIsDatePickerVisible(val);

  const toggleTimePicker = val => setIsTimePckerVisible(val);

  const onDateConfirm = (_, date) => {
    toggleDatePicker(false);
    setCurrentDate(date);
  };

  const onTimeConfirm = (_, time) => {
    toggleTimePicker(false);
    setCurrentTime(time);
  };

  const handleOdometer = val => {
    editingStarted();
    if (val > 0) setOdometer(Number(val));
    else setOdometer('');
  };

  const handleGas = val => {
    editingStarted();
    if (val > 0) setGas(Number(val));
    else setGas('');
  };

  const handlePricePerL = val => {
    editingStarted();
    if (val > 0) setPricePerL(Number(val));
    else setPricePerL('');
  };

  const handleTotalCost = val => {
    editingStarted();
    if (val > 0) setTotalCost(Number(val));
    else setTotalCost('');
  };

  const submitDetails = () => {
    dispatch(
      saveOdometerData({
        creationDate: getDateFormat(currentDate),
        creationTime: getTimeFormat(currentTime),
        creationMonth: getYearFormat(currentDate),
        gas: gas,
        gasType: {type: 'string', default: 'Regular'},
        pricePerLitre: pricePerL,
        totalCost: totalCost,
        distanceTravelled: odometer,
      }),
    );
    // navigation.replace('HomeScreen', {
    //   screen: 'Timeline',
    // });
    navigation.navigate('Timeline');
  };

  const getYearFormat = stamp => {
    const year = stamp.getFullYear();
    const month = getMonthName[stamp.getMonth()].substring(0, 3);
    return `${month} ${year}`;
  };

  const getDateFormat = stamp => {
    const year = stamp.getFullYear();
    const month = stamp.getMonth() + 1;
    const date = stamp.getDate();
    return `${year}-${month}-${date}`;
  };

  const getTimeFormat = stamp => {
    const hours = stamp.getHours();
    const minute = stamp.getMinutes();
    const isAm = hours < 12;

    return `${getMinimumTwoDigits(hours % 12)}:${getMinimumTwoDigits(minute)} ${
      isAm ? 'AM' : 'PM'
    }`;
  };

  const goBack = () => navigation.goBack();

  const onGoBackClick = () => {
    if (hasEditingStarted) {
      Alert.alert(
        'Are you sure you want to go back?',
        'All your changes will be lost...',
        [
          {
            text: 'Stay',
            onPress: () => console.log('Cancel Pressed'),
            style: 'cancel',
          },
          {text: 'Go back', onPress: goBack},
        ],
      );
    } else goBack();
  };

  const onScreenTouch = () => {
    isDatePickerVisible && toggleDatePicker();
    isTimePckerVisible && toggleTimePicker();
  };

  return (
    <>
      <Header
        navigation={navigation}
        onGoBack={onGoBackClick}
        showRightIcon={isEditingComplete}
        onRightIconClick={submitDetails}
      />
      <SafeAreaView
        style={styles.container}
        onStartShouldSetResponder={onScreenTouch}>
        <ScrollView
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddingTop: 50,
            paddingBottom: 20,
          }}>
          <InputWrapper image={meterIcon}>
            <Input
              containerStyle={commonStyles.flex1}
              hint={'Odometer (ml)'}
              value={odometer.toString()}
              onChangeText={handleOdometer}
            />
          </InputWrapper>
          <InputSeperator />
          <InputWrapper image={fuelIcon} style={[commonStyles.flexRow]}>
            <Input
              containerStyle={commonStyles.flex1}
              hint={'Gas (l)'}
              value={gas.toString()}
              onChangeText={handleGas}
            />
            <InputSeperator />
            <Input
              containerStyle={commonStyles.flex1}
              hint={'Gas type'}
              value={'Regular'}
              isDisabled={true}
            />
          </InputWrapper>
          <InputSeperator />
          <InputWrapper image={ruppeeIcon} style={[commonStyles.flexRow]}>
            <Input
              containerStyle={commonStyles.flex1}
              hint={'Price/L'}
              value={pricePerL}
              onChangeText={handlePricePerL}
            />
            <InputSeperator />
            <Input
              containerStyle={commonStyles.flex1}
              hint={'Total Cost'}
              value={totalCost}
              onChangeText={handleTotalCost}
            />
          </InputWrapper>
          <InputSeperator />
          <InputWrapper image={calendarIcon} style={[commonStyles.flexRow]}>
            <Input
              containerStyle={commonStyles.flex1}
              hint={'Date'}
              onPress={() => toggleDatePicker(true)}
              value={getDateFormat(currentDate)}
              isDisabled={true}
              isWrapperEventEmmitter
            />
            <InputSeperator />
            <Input
              containerStyle={commonStyles.flex1}
              hint={'Time'}
              onPress={() => toggleTimePicker(true)}
              isWrapperEventEmmitter
              value={getTimeFormat(currentTime)}
              isDisabled={true}
            />
          </InputWrapper>
        </ScrollView>
      </SafeAreaView>
      <DatePicker
        isVisible={isDatePickerVisible}
        initialDate={currentDate}
        onDateConfirm={onDateConfirm}
      />
      <DatePicker
        isTime={true}
        isVisible={isTimePckerVisible}
        initialDate={currentDate}
        onDateConfirm={onTimeConfirm}
      />
    </>
  );
};

function InputSeperator() {
  return <View style={styles.titleSeperator} />;
}

export default Refuel;
