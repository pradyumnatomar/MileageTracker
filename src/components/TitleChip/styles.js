import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
  chipWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 14,
    alignSelf: 'center',
    backgroundColor: '#212121',
    borderRadius: 20,
    marginTop: 20,
  },
  icon: {
    height: 20,
    width: 20,
  },
  label: {
    fontSize: 16,
    color: '#BCBCBC',
    marginLeft: 14,
  },
});
