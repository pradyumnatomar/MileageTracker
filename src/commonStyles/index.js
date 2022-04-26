import {StyleSheet} from 'react-native';

export default commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flexJustifyBtw: {
    justifyContent: 'space-between',
  },
  flexCenter: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  txt14: {
    fontSize: 14,
    color: '#BCBCBC',
  },
  txt16: {
    fontSize: 16,
    color: '#BCBCBC',
  },
  mt4: {
    marginTop: 4,
  },
  mt6: {
    marginTop: 6,
  },
  mb4: {
    marginBottom: 4,
  },
  mb6: {
    marginBottom: 6,
  },
  setMarginLeft: left => ({marginLeft: left}),
  setMarginRight: right => ({marginRight: right}),
  pd16: {
    padding: 16,
  },
  headerWrapper: {
    backgroundColor: '#212121',
  },
  headerIcon: {
    height: 28,
    width: 28,
    resizeMode: 'contain',
  },
});
