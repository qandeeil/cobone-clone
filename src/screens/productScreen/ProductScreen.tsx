import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

type ProductScreenProps = {};

export function ProductScreen(_props: ProductScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ProductScreen</Text>
    </SafeAreaView>
  );
}
