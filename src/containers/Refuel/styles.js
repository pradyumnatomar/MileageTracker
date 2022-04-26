import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.9)',
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
    height: 16,
    width: 16,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginRight: 16,
  },
});
