import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    gap: moderateScale(12, 0.3),
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5, 0.3),
  },
  containerInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#22222223',
    borderBottomWidth: 1,
    paddingBottom: moderateScale(18, 0.3),
  },
  textPrice: {
    fontWeight: '700',
    fontSize: moderateScale(18, 0.3),
    color: '#222',
  },
  textOldPrice: {
    fontWeight: '700',
    fontSize: moderateScale(13, 0.3),
    color: '#222',
    opacity: 0.5,
    textDecorationLine: 'line-through',
  },
  containerDiscount: {
    backgroundColor: '#deb3645e',
    borderRadius: 100,
    width: moderateScale(25, 0.3),
    height: moderateScale(25, 0.3),
    justifyContent: 'center',
    alignItems: 'center',
  },
  textDiscountPrice: {
    fontWeight: '700',
    fontSize: moderateScale(8, 0.3),
    color: '#d4a244',
  },
  changeCartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12, 0.3),
  },
  changeClick: {
    backgroundColor: '#ECECEC',
    width: moderateScale(24, 0.3),
    height: moderateScale(24, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'gray',
    borderWidth: 1,
  },
  textQuantity: {
    fontWeight: 'bold',
    fontSize: moderateScale(16, 0.3),
  },
  textDesc: {
    fontWeight: '500',
    color: '#222',
    fontSize: moderateScale(14, .3),
    flex: 1
  }
});

export default styles;
