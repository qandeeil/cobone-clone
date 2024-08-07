import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    height: moderateScale(120, 0.3),
    width: moderateScale(300, 0.3),
    overflow: 'hidden',
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: '45%',
    height: '100%',
    objectFit: 'fill',
  },
  containerInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    height: '100%',
    paddingVertical: moderateScale(16, 0.3),
    paddingHorizontal: moderateScale(5, 0.3),
  },
  textInfo: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: moderateScale(14, 0.3),
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
