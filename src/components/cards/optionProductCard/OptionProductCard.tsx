import * as React from 'react';
import {View, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import styles from './styles';
import {useAppSelector} from '../../../store/hooks';

type OptionProductCardProps = {
  price: number;
  _id: string;
  discount: number;
  description: string;
  name: string;
  handleAddToCart: (optionId: string) => void;
  handleRemoveToCart: (optionId: string) => void;
  initialQuantity: number;
};

export function OptionProductCard({
  price,
  _id,
  discount,
  description,
  name,
  handleAddToCart,
  handleRemoveToCart,
  initialQuantity,
}: OptionProductCardProps) {
  const discountedPrice = discount
    ? (price - (price * discount) / 100).toFixed(2)
    : price.toFixed(2);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.textDesc}>
        {name}: {description}
      </Text>
      <View style={styles.containerInfo}>
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
        <View style={styles.changeCartItem}>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.changeClick}
            onPress={() => handleRemoveToCart(_id)}
            disabled={initialQuantity === 0}>
            <Text>-</Text>
          </TouchableOpacity>
          <Text style={styles.textQuantity}>{initialQuantity}</Text>
          <TouchableOpacity
            activeOpacity={0.7}
            style={styles.changeClick}
            onPress={() => {
              handleAddToCart(_id);
            }}>
            <Text>+</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
