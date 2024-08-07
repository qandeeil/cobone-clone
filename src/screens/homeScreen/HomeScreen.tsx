import * as React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import styles from './styles';
import {HeaderHome} from '../../components/headerHome/HeaderHome';
import {BannerHome} from '../../components/bannerHome/BannerHome';
import {ItemsSection} from '../../components/itemsSection/ItemsSection';
import ItemsDataJSON from '../../../assets/json/items.json';

type HomeScreenProps = {};

export function HomeScreen(_props: HomeScreenProps) {
  return (
    <View style={styles.container}>
      <HeaderHome />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <BannerHome />
        <ItemsSection data={ItemsDataJSON} />
      </ScrollView>
    </View>
  );
}
