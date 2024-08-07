import * as React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';

interface IItem {
  _id: string;
  name: string;
  image: string;
}

type ItemProps = {
  item: IItem;
};

export function Item({item}: ItemProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <View style={styles.containerImage}>
        <Image source={{uri: item.image}} style={styles.image} />
      </View>
      <Text style={styles.textName}>{item.name}</Text>
    </TouchableOpacity>
  );
}
