import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    height: moderateScale(210, 0.3),
    marginTop: moderateScale(-25, .3)
  },
  wrapper: {},
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    paddingHorizontal: moderateScale(12, 0.3),
  },
  image: {
    height: moderateScale(160, 0.3),
    width: '100%',
    objectFit: 'fill',
    borderRadius: 12,
  },
  paginationStyle: {
    bottom: 0,
  },
  dot: {
    width: moderateScale(24, 0.3),
    height: moderateScale(5, 0.3),
    borderRadius: moderateScale(3, 0.3),
    backgroundColor: '#DEB364',
    opacity: 0.3,
  },
  activeDot: {
    width: moderateScale(24, 0.3),
    height: moderateScale(5, 0.3),
    borderRadius: moderateScale(3, 0.3),
    backgroundColor: '#DEB364',
    opacity: 1,
  },
});

export default styles;
