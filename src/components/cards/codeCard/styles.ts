import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(8, 0.3),
  },
  textTitle: {
    fontWeight: '500',
    fontSize: moderateScale(14, 0.3),
    color: '#222',
  },
  containerInput: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: moderateScale(6, 0.3),
    height: moderateScale(50, 0.3),
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    paddingHorizontal: moderateScale(4, 0.3),
    paddingEnd: moderateScale(12, 0.3),
  },
  buttonPay: {
    backgroundColor: '#385E83',
    height: '100%',
    borderRadius: 12,
    width: '45%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: moderateScale(12, 0.3),
    fontWeight: 'bold',
  },
});

export default styles;
