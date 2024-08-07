import * as React from 'react';
import {View, ScrollView} from 'react-native';
import styles from './styles';
import {HeaderHome} from '../../components/headerHome/HeaderHome';
import {BannerHome} from '../../components/bannerHome/BannerHome';
import {ItemsSection} from '../../components/itemsSection/ItemsSection';
import ItemsDataJSON from '../../../assets/json/items.json';
import {SectionProducts} from '../../components/sectionProducts/SectionProducts';
import productsJSON from '../../../assets/json/products.json';
import {SectionTags} from '../../components/sectionTags/SectionTags';
import tagsJSON from '../../../assets/json/tags.json';

type HomeScreenProps = {};

export function HomeScreen(_props: HomeScreenProps) {
  const gettypeOne = productsJSON.filter(item => item.type === 1);
  const gettypeTwo = productsJSON.filter(item => item.type === 2);
  const gettypeThree = productsJSON.filter(item => item.type === 3);
  const gettypeFour = productsJSON.filter(item => item.type === 4);
  const gettypeFive = productsJSON.filter(item => item.type === 5);
  const gettypeSix = productsJSON.filter(item => item.type === 6);
  const gettypeSe = productsJSON.filter(item => item.type === 7);
  const gettypeBu = productsJSON.filter(item => item.type === 8);

  const getTagsTwo = tagsJSON.filter(item => item.type === 2);
  const getTagsThree = tagsJSON.filter(item => item.type === 3);
  const getTagsFour = tagsJSON.filter(item => item.type === 4);
  const getTagsSe = tagsJSON.filter(item => item.type === 7);
  const getTagsBu = tagsJSON.filter(item => item.type === 8);

  return (
    <View style={styles.container}>
      <HeaderHome />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}>
        <BannerHome />
        <SectionProducts
          title="Unmissable Offers"
          data={gettypeOne}
          type="default"
        />
        <ItemsSection data={ItemsDataJSON} />
        <SectionProducts
          title="Activities"
          data={gettypeFive}
          type="activities"
        />
        <SectionProducts
          title="Featured deals on Activities"
          data={gettypeTwo}
          type="default"
        />
        <SectionTags
          title="Need more deals on Activities?"
          data={getTagsTwo}
          numColumns={3}
        />
        <SectionProducts
          title="Featured deals on Auto"
          data={gettypeSe}
          type="default"
        />
        <SectionTags
          title="Need more deals on Auto?"
          data={getTagsSe}
          numColumns={2}
        />

        <SectionProducts title="Beauty" data={gettypeSix} type="activities" />
        <SectionProducts
          title="Featured deals on Beauty"
          data={gettypeBu}
          type="default"
        />
        <SectionTags
          title="Need more deals on Beauty?"
          data={getTagsBu}
          numColumns={3}
        />

        <SectionProducts title="Food" data={gettypeThree} type="food" />

        <SectionProducts
          title="Featured deals on Food"
          data={gettypeThree}
          type="default"
        />
        <SectionTags
          title="Need more deals on Food?"
          data={getTagsThree}
          numColumns={3}
        />
        <SectionProducts
          title="Featured deals on Getaways"
          data={gettypeFour}
          type="default"
        />
        <SectionTags
          title="Need more deals on Getaways?"
          data={getTagsFour}
          numColumns={2}
        />
      </ScrollView>
    </View>
  );
}
