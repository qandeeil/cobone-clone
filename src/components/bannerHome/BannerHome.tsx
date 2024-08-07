import * as React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import styles from './styles';

type BannerHomeProps = {};

export function BannerHome(_props: BannerHomeProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tester}/>
    </SafeAreaView>
  );
}
