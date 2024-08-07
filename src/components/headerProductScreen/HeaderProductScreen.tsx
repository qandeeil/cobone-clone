import * as React from 'react';
import {View, Text, TouchableOpacity, SafeAreaView} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

type HeaderProductScreenProps = {};

export function HeaderProductScreen(_props: HeaderProductScreenProps) {
  const navigation: any = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          activeOpacity={0.8}
          onPress={() => navigation.goBack()}
          style={styles.containerBack}>
          <Ionicons
            name="chevron-back-outline"
            color={'#fff'}
            size={moderateScale(25, 0.3)}
          />
        </TouchableOpacity>
        <View style={styles.containerActions}>
          <TouchableOpacity activeOpacity={0.8}>
            <AntDesign
              name="hearto"
              color={'#000'}
              size={moderateScale(22, 0.3)}
            />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8}>
            <Entypo name="share" color={'#000'} size={moderateScale(22, 0.3)} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={0.8} onPress={() => navigation.navigate("Cart")}>
            <Ionicons
              name="cart"
              color={'#000'}
              size={moderateScale(25, 0.3)}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
