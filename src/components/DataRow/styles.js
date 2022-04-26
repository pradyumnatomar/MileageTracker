import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  rowWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  icon: {
    height: 20,
    width: 20,
    borderRadius: 10,
  },
  leftLabel: {
    marginHorizontal: 20,
    fontSize: 16,
    color: '#fff',
  },
  rightLabel: {
    marginLeft: 'auto',
    fontSize: 14,
    color: '#BCBCBC',
  },
});
