import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

type OrdersScreenProps = {};

export function OrdersScreen(_props: OrdersScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>OrdersScreen</Text>
    </SafeAreaView>
  );
}
