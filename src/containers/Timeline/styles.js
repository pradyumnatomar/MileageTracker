import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#212121',
  },
  indicatorCircle: {
    height: 20,
    width: 20,
    backgroundColor: 'skyblue',
    borderRadius: 16,
  },
  fuelIconWrapper: {
    height: 60,
    width: 60,
    backgroundColor: 'skyblue',
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fuelIcon: {
    height: 30,
    width: 30,
  },
  indicatorLineShort: {
    width: 3,
    height: 50,
    backgroundColor: 'skyblue',
  },
  indicatorLineLong: {
    width: 3,
    height: 70,
    backgroundColor: 'skyblue',
  },
  dateTxt: {
    color: 'skyblue',
    fontWeight: '600',
  },
  titleSeperator: {
    height: 5.5,
  },
  addDataCta: {
    backgroundColor: 'skyblue',
    alignSelf: 'center',
    borderRadius: 30,
    marginTop: '50%',
    width: '60%',
    maxWidth: 200,
  },
});
