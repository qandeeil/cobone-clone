import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(12, 0.3),
    flexDirection: 'column',
  },
  textHeader: {
    fontSize: moderateScale(16, 0.3),
    fontWeight: 'bold',
    paddingHorizontal: moderateScale(12, 0.3),
  },
  scrollViewContent: {
    gap: moderateScale(12, 0.3),
    paddingHorizontal: moderateScale(12, 0.3),
  },
  row: {
    gap: moderateScale(12, 0.3),
  }
});

export default styles;
