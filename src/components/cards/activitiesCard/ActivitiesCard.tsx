import * as React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './styles';

type ActivitiesCardProps = {
  name: string;
  price: number;
  image: string;
  background: string | undefined
};

export function ActivitiesCard({name, price, image, background}: ActivitiesCardProps) {
  return (
    <View style={[styles.container, {backgroundColor: background}]}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.containerInfo}>
        <Text style={styles.textInfo}>{name}</Text>
        <Text style={styles.textPrice}>AED {price}</Text>
      </View>
    </View>
  );
}
