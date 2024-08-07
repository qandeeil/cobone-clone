import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  activeNav: {
    position: 'relative'
  },
  nav: {
    borderColor: 'red',
  },
  containerNav: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: moderateScale(6, 0.3),
  },
  border: {
    borderWidth: moderateScale(2.5, 0.3),
    flex: 1,
    position: 'absolute',
    width: '100%',
    top: 0,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4
  },
});

export default styles;
