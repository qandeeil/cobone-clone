import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

type WishlistScreenProps = {};

export function WishlistScreen(_props: WishlistScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>WishlistScreen</Text>
    </SafeAreaView>
  );
}
