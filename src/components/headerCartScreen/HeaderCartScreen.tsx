import * as React from 'react';
import {View, TouchableOpacity, SafeAreaView, Text} from 'react-native';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import {moderateScale} from 'react-native-size-matters';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';

type HeaderCartScreenProps = {};

export function HeaderCartScreen(_props: HeaderCartScreenProps) {
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
        <Text style={styles.textTitle}>My Cart</Text>
      </View>
    </SafeAreaView>
  );
}
