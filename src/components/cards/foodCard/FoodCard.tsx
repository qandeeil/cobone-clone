import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';

type FoodCardProps = {
  name: string;
  image: string;
  price: number;
  background?: string;
  _id: string;
};

export function FoodCard({name, image, price, background, _id}: FoodCardProps) {
  const navigation: any = useNavigation();
  const truncatedName = name.length > 35 ? `${name.slice(0, 35)}...` : name;
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: background}]}
      onPress={() => navigation.navigate('Product', {product_id: _id})}
      activeOpacity={0.8}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text style={styles.textInfo}>{truncatedName}</Text>
        <Text style={styles.textPrice}>AED {price}</Text>
      </View>
    </TouchableOpacity>
  );
}
