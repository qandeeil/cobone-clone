import {Platform, StyleSheet} from 'react-native';
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
    paddingBottom: moderateScale(12, 0.3),
  },
  containerTotalPrice: {
    ...(Platform.OS === 'ios'
      ? {
          height: moderateScale(110, 0.3),
        }
      : {}),
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: moderateScale(12, 0.3),
    paddingVertical: moderateScale(18, 0.3),
    backgroundColor: '#fff',
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
  listFooterComponent: {
    gap: moderateScale(12, 0.3),
  },
  containerBills: {
    gap: moderateScale(8, 0.3),
  },
  textTitleBills: {
    fontWeight: '500',
    fontSize: moderateScale(14, 0.3),
    color: '#222',
  },
  contentBills: {
    backgroundColor: '#fff',
    borderRadius: 12,
    flexDirection: 'column',
    paddingVertical: moderateScale(12, 0.3),
    paddingHorizontal: moderateScale(14, 0.3),
  },
  sectionBills: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textBillsFAS: {
    fontSize: moderateScale(13, 0.3),
    color: '#222',
    fontWeight: '400',
    opacity: 0.7,
    paddingHorizontal: moderateScale(14, 0.3),
  },
  textBillsLAS: {
    fontSize: moderateScale(13, 0.3),
    color: '#222',
    fontWeight: '500',
    paddingHorizontal: moderateScale(14, 0.3),
  },
  sectionBillsOne: {
    borderBottomColor: '#000',
    borderBottomWidth: 1,
    paddingBottom: moderateScale(8, 0.3),
  },
  sectionBillsTwo: {
    paddingTop: moderateScale(8, 0.3),
  },
});

export default styles;
