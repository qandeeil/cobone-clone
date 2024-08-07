import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale} from 'react-native-size-matters';
import {useNavigation} from '@react-navigation/native';

interface IReviews {
  _id: string;
  rate: number;
}

type ProductCardProps = {
  image: string;
  name: string;
  price: number;
  discount: number;
  reviews: IReviews[];
  _id: string;
};

export function ProductCard({
  image,
  name,
  price,
  discount,
  reviews,
  _id,
}: ProductCardProps) {
  const discountedPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price.toFixed(2);
  const totalRating = reviews.reduce((sum, review) => sum + review.rate, 0);
  const averageRating = reviews.length > 0 ? totalRating / reviews.length : 0;
  const roundedAverageRating = averageRating.toFixed(1);
  const navigation: any = useNavigation();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Product', {product_id: _id})}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.containerInfoCard}>
        <View style={styles.containerText}>
          <Text style={styles.textTitle}>{name}</Text>
          <View style={styles.containerPrice}>
            {discount > 0 ? (
              <>
                <Text style={styles.textPrice}>AED {discountedPrice}</Text>
                <Text style={styles.textOldPrice}>{price.toFixed(2)}</Text>
                <View style={styles.containerDiscount}>
                  <Text style={styles.textDiscountPrice}>{discount}%</Text>
                </View>
              </>
            ) : (
              <Text style={styles.textPrice}>AED {price.toFixed(2)}</Text>
            )}
          </View>
        </View>
        <View style={styles.containerRate}>
          <View style={styles.rate}>
            <Text style={styles.textRate}>{roundedAverageRating}</Text>
            <MaterialIcons
              name="star-rate"
              color={'#fff'}
              size={moderateScale(14, 0.3)}
            />
          </View>
          <Text style={styles.textInfoRate}>{reviews.length} Reviews</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
