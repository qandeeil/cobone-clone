import * as React from 'react';
import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {HeaderProductScreen} from '../../components/headerProductScreen/HeaderProductScreen';
import {useNavigation, useRoute} from '@react-navigation/native';
import {RouteProp} from '@react-navigation/native';
import ProductsData from '../../../assets/json/products.json';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {useAppDispatch, useAppSelector} from '../../store/hooks';
import {addToCartThunk, removeFromCartThunk} from '../../store/cart';
import {OptionProductCard} from '../../components/cards/optionProductCard/OptionProductCard';
import {IOptions, ISelectedOption} from '../../store/cart/interfaces';

type RootStackParamList = {
  Product: {
    product_id: string;
  };
};

type ProductScreenRouteProp = RouteProp<RootStackParamList, 'Product'>;

type ProductScreenProps = {};

export function ProductScreen(_props: ProductScreenProps) {
  const route = useRoute<ProductScreenRouteProp>();
  const {product_id} = route.params;
  const product: any = ProductsData.find(item => item._id === product_id);
  const cartSlice = useAppSelector(state => state.cartSlice);
  const dispatch = useAppDispatch();
  const navigation: any = useNavigation();

  const handleAddToCart = (optionId: string) => {
    dispatch(
      addToCartThunk({
        product_id,
        optionId,
      }),
    );
  };

  const handleRemoveToCart = (optionId: string) => {
    dispatch(removeFromCartThunk({product_id, optionId}));
  };

  return (
    <View style={styles.container}>
      <HeaderProductScreen />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}>
        <Image source={{uri: product?.image}} style={styles.headerImage} />
        <View style={styles.infoProduct}>
          <Text style={styles.textNameProduct}>{product?.name}</Text>
          <Text style={styles.textDescriptionProduct}>
            Experience a thrilling adventure in the Arabian Dunes with VIP
            Desert Safari inclusive of home pickup and drop off by Desert Trips
            starting from AED 90 only!
          </Text>
          <View style={styles.containerLB}>
            {product?.forLimited ? (
              <View style={styles.containerExtra}>
                <View style={styles.containerLimited}>
                  <MaterialCommunityIcons
                    name="clock-time-four-outline"
                    size={moderateScale(15, 0.3)}
                    color={'#DEB364'}
                  />
                  <Text style={styles.textLimited}>
                    FOR A LIMITED TIME ONLY
                  </Text>
                </View>
              </View>
            ) : null}
            {product?.bought ? (
              <View style={styles.containerExtra}>
                <View style={styles.containerLimited}>
                  <Feather
                    name="check"
                    size={moderateScale(15, 0.3)}
                    color={'#DEB364'}
                  />
                  <Text style={styles.textLimited}>
                    {product?.bought} BOUGHT
                  </Text>
                </View>
              </View>
            ) : null}
          </View>
        </View>
        {product?.options ? (
          <View style={styles.infoProduct}>
            <Text style={styles.textchooseOption}>Choose your option</Text>
            {product?.options.map((item: IOptions, index: number) => (
              <OptionProductCard
                description={item.description}
                price={item.price}
                discount={item.discount}
                _id={item._id}
                name={`Option ${index + 1}`}
                key={item._id}
                handleAddToCart={handleAddToCart}
                handleRemoveToCart={handleRemoveToCart}
                initialQuantity={
                  cartSlice.products.find(
                    p =>
                      p._id === product_id &&
                      p.selectedOption?._id === item._id,
                  )?.selectedOption?.quantity || 0
                }
              />
            ))}
          </View>
        ) : null}
        {otherInfo('Conditions')}
        {otherInfo('Conditions')}
      </ScrollView>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.buttonAddCart}
          onPress={() => navigation.navigate('Cart')}>
          <Ionicons name="cart" color={'#fff'} size={moderateScale(20, 0.3)} />
          <Text style={styles.textButton}>Add to cart</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const otherInfo = (title: string) => {
  return (
    <View style={styles.infoProduct}>
      <Text style={styles.textOtherInfo}>{title}</Text>
    </View>
  );
};
