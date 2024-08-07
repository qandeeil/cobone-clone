import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

type CategoriesScreenProps = {};

export function CategoriesScreen(_props: CategoriesScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>CategoriesScreen</Text>
    </SafeAreaView>
  );
}
