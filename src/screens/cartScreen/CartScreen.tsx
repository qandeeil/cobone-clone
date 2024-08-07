import * as React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import styles from './styles';
import {HeaderCartScreen} from '../../components/headerCartScreen/HeaderCartScreen';
import {useAppSelector} from '../../store/hooks';
import {ProductCartCards} from '../../components/cards/productCartCards/ProductCartCards';
import {CodeCard} from '../../components/cards/codeCard/CodeCard';

type CartScreenProps = {};

export function CartScreen(props: CartScreenProps) {
  const cartSlice = useAppSelector(state => state.cartSlice);
  const calculateTotalPrice = () => {
    return cartSlice.products
      .reduce((total, item) => {
        if (item.selectedOption) {
          const priceAfterDiscount = item.selectedOption.discount
            ? item.selectedOption.price -
              (item.selectedOption.price * item.selectedOption.discount) / 100
            : item.selectedOption.price;
          return total + priceAfterDiscount * item.selectedOption.quantity;
        }
        return 0;
      }, 0)
      .toFixed(2);
  };

  const totalPrice = calculateTotalPrice();

  return (
    <View style={styles.container}>
      <HeaderCartScreen />
      <FlatList
        data={cartSlice.products}
        keyExtractor={(item, index) => item._id + index}
        renderItem={({item}) => (
          <ProductCartCards
            image={item.image}
            name={item.name}
            price={item.selectedOption?.price}
            discount={item.selectedOption?.discount}
            product_id={item._id}
            quantity={item.selectedOption?.quantity}
            nameSelectedOption={item.selectedOption?.description}
            optionId={item.selectedOption?._id}
          />
        )}
        contentContainerStyle={styles.contentContainerStyle}
        showsVerticalScrollIndicator={false}
        ListFooterComponent={() => (
          <View style={styles.listFooterComponent}>
            <CodeCard title="Discount Code" placeholder="Enter coupon code" />
            <CodeCard title="Gift Card" placeholder="Gift card code" />
            <View style={styles.containerBills}>
              <Text style={styles.textTitleBills}>Payment Details</Text>
              <View style={styles.contentBills}>
                <View style={[styles.sectionBills, styles.sectionBillsOne]}>
                  <Text style={styles.textBillsFAS}>Subtotal</Text>
                  <Text style={styles.textBillsFAS}>AED {totalPrice}</Text>
                </View>
                <View style={[styles.sectionBills, styles.sectionBillsTwo]}>
                  <Text style={styles.textBillsLAS}>To Pay</Text>
                  <Text style={styles.textBillsLAS}>AED {totalPrice}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />

      <View style={styles.containerTotalPrice}>
        <View style={styles.containerPrice}>
          <Text style={styles.textTotal}>Total Price</Text>
          <Text style={styles.textPrice}>AED {totalPrice}</Text>
        </View>
        <TouchableOpacity activeOpacity={0.7} style={styles.buttonPay}>
          <Text style={styles.textButton}>Proceed to Pay</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
