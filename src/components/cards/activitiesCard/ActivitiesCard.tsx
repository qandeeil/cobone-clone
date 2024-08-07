import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type ActivitiesCardProps = {
  name: string;
  price: number;
  image: string;
  background: string | undefined;
  _id: string;
};

export function ActivitiesCard({
  name,
  price,
  image,
  background,
  _id,
}: ActivitiesCardProps) {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: background}]}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Product', {product_id: _id})}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text style={styles.textInfo}>{name}</Text>
        <Text style={styles.textPrice}>AED {price}</Text>
      </View>
    </TouchableOpacity>
  );
}
