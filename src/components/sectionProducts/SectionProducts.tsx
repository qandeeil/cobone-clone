import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {ProductCard} from '../cards/productCard/ProductCard';

interface IReviews {
  _id: string;
  rate: number;
}

interface IData {
  _id: string;
  image: string;
  name: string;
  price: number;
  discount: number;
  reviews: IReviews[];
}

type SectionProductsProps = {
  title: string;
  data: IData[];
};

export function SectionProducts({title, data}: SectionProductsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <ProductCard
            image={item.image}
            name={item.name}
            price={item.price}
            discount={item.discount}
            reviews={item.reviews}
          />
        )}
        keyExtractor={item => item._id.toString()}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
