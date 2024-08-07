import * as React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';
import styles from './styles';
import {useNavigation} from '@react-navigation/native';
import {useAppDispatch} from '../../../store/hooks';
import {addToCartThunk, removeFromCartThunk} from '../../../store/cart';

type ProductCartCardsProps = {
  image: string;
  name: string;
  price: number | undefined;
  discount: number | undefined;
  product_id: string;
  quantity: number | undefined;
  nameSelectedOption: string | undefined;
  optionId: string | undefined;
};

export function ProductCartCards({
  image,
  name,
  price,
  discount,
  product_id,
  quantity,
  nameSelectedOption,
  optionId,
}: ProductCartCardsProps) {
  const discountedPrice = discount
    ? price
      ? (price - (price * discount) / 100).toFixed(2)
      : price
      ? price.toFixed(2)
      : 0
    : 0;
  const navigation: any = useNavigation();
  const dispatch = useAppDispatch();

  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={0.8}
      onPress={() => navigation.navigate('Product', {product_id: product_id})}>
      <Image
        source={{
          uri: image,
        }}
        style={styles.image}
      />
      <View style={styles.containerInfoCard}>
        <View style={styles.containerText}>
          <Text style={styles.textTitle}>{name}</Text>
          <Text style={styles.textTitle}>{nameSelectedOption}</Text>
          <View style={styles.containerPrice}>
            <View style={styles.subclontainerProce}>
              {discount ? (
                discount > 0 ? (
                  <>
                    <Text style={styles.textPrice}>AED {discountedPrice}</Text>
                    <Text style={styles.textOldPrice}>
                      {price && price.toFixed(2)}
                    </Text>
                    <View style={styles.containerDiscount}>
                      <Text style={styles.textDiscountPrice}>{discount}%</Text>
                    </View>
                  </>
                ) : !discount && price ? (
                  <Text style={styles.textPrice}>AED {price.toFixed(2)}</Text>
                ) : null
              ) : null}
            </View>
            <View style={styles.changeCartItem}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.changeClick}
                onPress={() => {
                  if (quantity && quantity > 0) {
                    dispatch(removeFromCartThunk({product_id, optionId}));
                  }
                }}>
                <Text>-</Text>
              </TouchableOpacity>
              <Text style={styles.textQuantity}>{quantity}</Text>
              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.changeClick}
                onPress={() => {
                  dispatch(addToCartThunk({product_id, optionId}));
                }}>
                <Text>+</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}
