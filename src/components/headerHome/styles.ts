import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#ffffff',
  },
  content: {
    paddingHorizontal: moderateScale(12, 0.3),
    gap: moderateScale(16, 0.3),
    paddingBottom: moderateScale(12, 0.3),
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  sectionOne: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12, 0.3),
  },
  textLocation: {
    fontWeight: 'bold',
    fontSize: moderateScale(20, 0.3),
    marginEnd: moderateScale(-10, 0.3),
  },
  sectionTwo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: moderateScale(12, 0.3),
  },
  containerSearch: {
    backgroundColor: '#EDF1FA',
    height: moderateScale(50, 0.3),
    justifyContent: 'center',
    paddingHorizontal: moderateScale(12, 0.3),
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textPlaceholdar: {
    color: '#9A9EA1',
    fontSize: moderateScale(14, 0.3),
    fontWeight: 400,
    flex: 1,
  },
});

export default styles;
