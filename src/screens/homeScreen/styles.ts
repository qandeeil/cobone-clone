import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  scrollViewContent: {
    gap: moderateScale(16, 0.3),
    paddingTop: moderateScale(12, 0.3),
    paddingBottom: moderateScale(12, .3)
  },
});

export default styles;
