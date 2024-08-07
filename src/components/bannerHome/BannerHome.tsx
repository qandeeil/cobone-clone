import * as React from 'react';
import {View, Text, SafeAreaView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import bannerJSON from '../../../assets/json/Banners.json';
import Swiper from 'react-native-swiper';

type BannerHomeProps = {};

export function BannerHome(_props: BannerHomeProps) {
  return (
    <SafeAreaView style={styles.container}>
      <Swiper
        style={styles.wrapper}
        showsButtons={false}
        autoplay={false}
        autoplayTimeout={7}
        dotStyle={styles.dot}
        paginationStyle={styles.paginationStyle}
        loop={false}
        activeDotStyle={styles.activeDot}>
        {bannerJSON.map((item: any) => (
          <TouchableOpacity
            style={styles.slide}
            key={item._id}
            activeOpacity={0.9}>
            <Image source={{uri: item.image}} style={styles.image} />
          </TouchableOpacity>
        ))}
      </Swiper>
    </SafeAreaView>
  );
}
