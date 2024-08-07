import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F7F6',
  },
  headerImage: {
    width: '100%',
    height: moderateScale(220, 0.3),
    objectFit: 'cover',
  },
  contentContainerStyle: {
    gap: moderateScale(12, 0.3),
  },
  infoProduct: {
    backgroundColor: '#fff',
    paddingHorizontal: moderateScale(12, 0.3),
    paddingVertical: moderateScale(14, 0.3),
    gap: moderateScale(14, 0.3),
  },
  textNameProduct: {
    fontWeight: 'bold',
    fontSize: moderateScale(16, 0.3),
  },
  textDescriptionProduct: {
    lineHeight: 20,
    fontWeight: '400',
    fontSize: moderateScale(13, 0.3),
  },
  containerExtra: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  containerLimited: {
    backgroundColor: '#deb3642f',
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(8, 0.3),
    paddingHorizontal: moderateScale(8, 0.3),
    paddingVertical: moderateScale(4, 0.3),
    borderRadius: 4,
    borderColor: '#DEB364',
    borderWidth: 1,
  },
  textLimited: {
    fontWeight: 'bold',
    fontSize: moderateScale(10, 0.3),
    color: '#DEB364',
  },
  containerLB: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  containerButton: {
    height: moderateScale(100, 0.3),
    alignItems: 'center',
  },
  buttonAddCart: {
    backgroundColor: '#385E83',
    height: moderateScale(45, 0.3),
    width: '95%',
    borderRadius: 12,
    marginTop: moderateScale(12, 0.3),
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: moderateScale(8, 0.3),
  },
  textButton: {
    color: '#fff',
    fontSize: moderateScale(14, 0.3),
    fontWeight: 'bold',
  },
  textOtherInfo: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: moderateScale(14, 0.3),
  },
  textchooseOption: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: moderateScale(14, 0.3),
    textTransform: 'uppercase',
  },
});

export default styles;
