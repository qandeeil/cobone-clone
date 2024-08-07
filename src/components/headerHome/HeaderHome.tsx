import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import {moderateScale} from 'react-native-size-matters';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FeatherIcons from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';

type HeaderHomeProps = {};

export function HeaderHome(props: HeaderHomeProps) {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.sectionOne} activeOpacity={0.7}>
            <FontAwesome6
              name="location-dot"
              color={'#000'}
              size={moderateScale(22, 0.3)}
            />
            <Text style={styles.textLocation}>Dubai</Text>
            <MaterialIcons
              name="arrow-drop-down"
              color={'#000'}
              size={moderateScale(35, 0.3)}
            />
          </TouchableOpacity>
          <View style={styles.sectionTwo}>
            <TouchableOpacity activeOpacity={0.7}>
              <MaterialIcons
                name="notifications"
                color={'#000'}
                size={moderateScale(25, 0.3)}
              />
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => navigation.navigate('Cart')}>
              <FontAwesome6
                name="cart-shopping"
                color={'#000'}
                size={moderateScale(18, 0.3)}
              />
            </TouchableOpacity>
          </View>
        </View>
        {SearchView()}
      </View>
    </SafeAreaView>
  );
}

const SearchView = () => {
  return (
    <TouchableOpacity style={styles.containerSearch} activeOpacity={0.8}>
      <Text style={styles.textPlaceholdar}>Search cobone...</Text>
      <FeatherIcons
        name="search"
        color={'#9A9EA1'}
        size={moderateScale(20, 0.3)}
      />
    </TouchableOpacity>
  );
};
