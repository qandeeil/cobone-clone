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
    justifyContent: 'space-between',
  },
  containerBack: {
    backgroundColor: '#DEB364',
    height: moderateScale(40, 0.3),
    width: moderateScale(40, 0.3),
    borderRadius: 1000,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerActions: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12, 0.3),
  },
});

export default styles;
