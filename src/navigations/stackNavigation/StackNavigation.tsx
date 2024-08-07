import * as React from 'react';
import {BottomNavigation} from '../bottomNavigation/BottomNavigation';
import {ProductScreen} from '../../screens/productScreen/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CartScreen } from '../../screens/cartScreen/CartScreen';

type StackNavigationProps = {};

export function StackNavigation(_props: StackNavigationProps) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomNavigation">
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Product" component={ProductScreen} />
      <Stack.Screen name="Cart" component={CartScreen} />
    </Stack.Navigator>
  );
}
