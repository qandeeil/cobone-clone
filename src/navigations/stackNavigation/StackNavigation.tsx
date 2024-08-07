import * as React from 'react';
import {BottomNavigation} from '../bottomNavigation/BottomNavigation';
import {ProductScreen} from '../../screens/productScreen/ProductScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

type StackNavigationProps = {};

export function StackNavigation(_props: StackNavigationProps) {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="BottomNavigation">
      <Stack.Screen name="BottomNavigation" component={BottomNavigation} />
      <Stack.Screen name="Product" component={ProductScreen} />
    </Stack.Navigator>
  );
}
