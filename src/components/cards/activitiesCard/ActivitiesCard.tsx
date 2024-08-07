import * as React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';

type ActivitiesCardProps = {
  name: string;
  price: number;
  image: string;
  background: string | undefined;
};

export function ActivitiesCard({
  name,
  price,
  image,
  background,
}: ActivitiesCardProps) {
  return (
    <TouchableOpacity
      style={[styles.container, {backgroundColor: background}]}
      activeOpacity={0.8}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text style={styles.textInfo}>{name}</Text>
        <Text style={styles.textPrice}>AED {price}</Text>
      </View>
    </TouchableOpacity>
  );
}
