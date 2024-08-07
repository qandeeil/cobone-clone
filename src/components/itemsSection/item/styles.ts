import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'center',
    gap: moderateScale(12, 0.3),
  },
  containerImage: {
    backgroundColor: '#F7F6FC',
    width: moderateScale(60, 0.3),
    height: moderateScale(60, 0.3),
    borderRadius: 14,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'contain',
  },
  textName: {
    fontSize: moderateScale(12, 0.3),
    fontWeight: '600',
  },
});

export default styles;
