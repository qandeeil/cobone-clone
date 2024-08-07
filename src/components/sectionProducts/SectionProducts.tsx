import * as React from 'react';
import {View, Text, FlatList} from 'react-native';
import styles from './styles';
import {ProductCard} from '../cards/productCard/ProductCard';
import {ActivitiesCard} from '../cards/activitiesCard/ActivitiesCard';
import {FoodCard} from '../cards/foodCard/FoodCard';

interface IReviews {
  _id: string;
  rate: number;
}

interface IOtions {
  price: number;
  _id: string;
  discount: number;
  description: string;
  quantity?: number;
}

interface IData {
  _id: string;
  image: string;
  name: string;
  reviews: IReviews[];
  background?: string;
  options: IOtions[];
}

type SectionProductsProps = {
  title: string;
  data: IData[];
  type: string;
};

export function SectionProducts({title, data, type}: SectionProductsProps) {
  return (
    <View style={styles.container}>
      <Text style={styles.textHeader}>{title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) =>
          type === 'activities' ? (
            <ActivitiesCard
              name={item.name}
              price={item.options[0].price}
              image={item.image}
              background={item.background}
              _id={item._id}
            />
          ) : type === 'food' ? (
            <FoodCard
              name={item.name}
              price={item.options[0].price}
              image={item.image}
              background={item.background}
              _id={item._id}
            />
          ) : (
            <ProductCard
              image={item.image}
              name={item.name}
              price={item.options[0].price}
              discount={item.options[0].discount}
              reviews={item.reviews}
              _id={item._id}
            />
          )
        }
        keyExtractor={item => item._id.toString()}
        horizontal
        contentContainerStyle={styles.contentContainerStyle}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
}
