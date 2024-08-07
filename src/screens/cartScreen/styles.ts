import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  contentContainerStyle: {
    gap: moderateScale(12, 0.3),
    paddingTop: moderateScale(12, 0.3),
    paddingHorizontal: moderateScale(12, 0.3),
  },
  containerTotalPrice: {
    height: moderateScale(110, 0.3),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12, 0.3),
    paddingTop: moderateScale(18, 0.3),
    backgroundColor: '#fff'
  },
  containerPrice: {
    flexDirection: 'column',
    gap: moderateScale(5, 0.3),
  },
  textTotal: {
    fontSize: moderateScale(12, 0.3),
    color: '#222',
    opacity: 0.8,
  },
  textPrice: {
    fontSize: moderateScale(18, 0.3),
    color: '#222',
    fontWeight: 'bold',
  },
  buttonPay: {
    backgroundColor: '#385E83',
    height: moderateScale(45, 0.3),
    borderRadius: 12,
    width: '50%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: moderateScale(14, 0.3),
    fontWeight: 'bold',
  },
});

export default styles;
