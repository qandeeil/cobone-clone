import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(12, 0.3),
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: moderateScale(24, 0.3),
    flexDirection: 'column',
    alignItems: 'center',
  },
  row: {
    gap: moderateScale(26, 0.3),
  },
  contentContainerStyle: {
    paddingHorizontal: moderateScale(12, 0.3),
  },
  scrollViewContent: {
    gap: moderateScale(40, 0.3),
    paddingHorizontal: moderateScale(32, 0.3),
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: moderateScale(30, 0.3),
    bottom: 0,
  },
  dot: {
    width: moderateScale(24, 0.3),
    height: moderateScale(5, 0.3),
    borderRadius: moderateScale(3, 0.3),
    backgroundColor: '#DEB364',
  },
});

export default styles;
