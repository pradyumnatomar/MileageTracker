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
    backgroundColor: 'skyblue',
    borderRadius: 10,
  },
  label: {
    fontSize: 16,
    color: '#BCBCBC',
    marginLeft: 14,
  },
  inputWrapper: {
    height: 70,
    borderWidth: 0.8,
    borderColor: '#e0e0e0',
    borderRadius: 6,
    padding: 14,
    fontSize: 16,
    justifyContent: 'center',
    color: '#fff',
  },
  floatingText: {
    color: '#a0a0a0',
    position: 'absolute',
    backgroundColor: '#211001',
  },
});
