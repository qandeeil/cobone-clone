import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

type CartScreenProps = {};

export function CartScreen(props: CartScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CartScreen</Text>
    </SafeAreaView>
  );
}
