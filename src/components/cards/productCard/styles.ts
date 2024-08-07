import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: moderateScale(6, 0.3),
    height: moderateScale(230, 0.3),
    width: moderateScale(300, 0.3),
    gap: moderateScale(12, 0.3),
  },
  image: {
    backgroundColor: 'gray',
    width: '100%',
    height: '60%',
    objectFit: 'fill',
    borderRadius: 12,
  },
  containerInfoCard: {
    flexDirection: 'row',
    flex: 1,
    paddingHorizontal: moderateScale(6, 0.3),
    paddingBottom: moderateScale(5, 0.3),
  },
  containerText: {
    flex: 1,
    justifyContent: 'space-between',
  },
  textTitle: {
    fontWeight: 'bold',
    fontSize: moderateScale(14, 0.3),
    color: '#222',
  },
  containerPrice: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(5, 0.3),
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
  containerRate: {
    alignItems: 'flex-end',
    flexDirection: 'column',
    gap: moderateScale(8, 0.3),
  },
  rate: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#DEB364',
    borderRadius: 4,
    justifyContent: 'center',
    paddingVertical: moderateScale(3, 0.3),
    paddingHorizontal: moderateScale(8, 0.3),
    gap: moderateScale(2, 0.3),
  },
  textRate: {
    color: '#fff',
    fontWeight: '700',
    fontSize: moderateScale(12, 0.3),
  },
  textInfoRate: {
    fontSize: moderateScale(12, 0.3),
    opacity: 0.7,
    color: '#222',
    fontWeight: '500',
  },
});

export default styles;
