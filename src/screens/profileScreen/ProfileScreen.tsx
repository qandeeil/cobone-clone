import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

type ProfileScreenProps = {};

export function ProfileScreen(_props: ProfileScreenProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Text>ProfileScreen</Text>
    </SafeAreaView>
  );
}
