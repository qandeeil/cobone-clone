import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(12, 0.3),
    height: moderateScale(30, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textName: {
    color: '#222',
    opacity: 0.8,
    fontWeight: '700',
    fontSize: moderateScale(12, 0.3),
  },
});

export default styles;
