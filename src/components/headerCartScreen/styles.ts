import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  content: {
    flexDirection: 'row',
    height: moderateScale(60, 0.3),
    width: '100%',
    paddingHorizontal: moderateScale(12, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  containerBack: {
    backgroundColor: '#DEB364',
    height: moderateScale(40, 0.3),
    width: moderateScale(40, 0.3),
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    start: moderateScale(12, 0.3),
  },
  textTitle: {
    fontWeight: '700',
    fontSize: moderateScale(18, 0.3),
    color: '#222',
  },
});

export default styles;
