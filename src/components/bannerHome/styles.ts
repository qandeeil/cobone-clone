import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: moderateScale(12, 0.3),
  },
  tester: {
    backgroundColor: 'red',
    height: moderateScale(150, 0.3),
    borderRadius: 12,
  },
});

export default styles;
