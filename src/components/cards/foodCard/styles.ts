import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    borderRadius: 12,
    height: moderateScale(130, 0.3),
    width: moderateScale(130, 0.3),
    overflow: 'hidden',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '50%',
    objectFit: 'fill',
  },
  containerInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    paddingHorizontal: moderateScale(5, 0.3),
    paddingVertical: moderateScale(5, 0.3),
  },
  textInfo: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: moderateScale(11, 0.3),
    color: '#fff',
  },
  textPrice: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: moderateScale(14, 0.3),
    color: '#fff',
  },
});

export default styles;
