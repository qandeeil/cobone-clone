import * as React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import styles from './styles';

type TagCardProps = {
  name: string;
};

export function TagCard({name}: TagCardProps) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.8}>
      <Text style={styles.textName}>{name}</Text>
    </TouchableOpacity>
  );
}
