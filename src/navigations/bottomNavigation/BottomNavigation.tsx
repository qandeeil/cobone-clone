import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {HomeScreen} from '../../screens/homeScreen/HomeScreen';
import {OrdersScreen} from '../../screens/ordersScreen/OrdersScreen';
import {CategoriesScreen} from '../../screens/categoriesScreen/CategoriesScreen';
import {WishlistScreen} from '../../screens/wishlistScreen/WishlistScreen';
import {ProfileScreen} from '../../screens/profileScreen/ProfileScreen';
import {Platform, Text, View} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {getFocusedRouteNameFromRoute, useRoute} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/FontAwesome';
import FeatherIcon from 'react-native-vector-icons/Feather';
import MaterialIconsIcon from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome';
import styles from './styles';

type BottomNavigationProps = {};

export function BottomNavigation(_props: BottomNavigationProps) {
  const Tab = createBottomTabNavigator();
  const routes = useRoute();
  const currentTabName = getFocusedRouteNameFromRoute(routes);
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        presentation: 'fullScreenModal',
        tabBarIcon: ({size, color}) =>
          tabBar(size, route, currentTabName, color),
        tabBarLabel: () => null,
        tabBarStyle:
          Platform.OS !== 'ios'
            ? {height: moderateScale(55, 0.3)}
            : {height: moderateScale(85, 0.2)},
        tabBarIconStyle: {flex: 1},
      })}
      initialRouteName="Home">
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Orders" component={OrdersScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
      <Tab.Screen name="Wishlist" component={WishlistScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const tabBar = (
  size: number,
  route: {name: string},
  navigation: any,
  color: any,
) => {
  const ISize = size + 1;

  let IconComponent;

  switch (route.name) {
    case 'Home':
      IconComponent = (
        <View
          style={[
            navigation === route.name ? styles.activeNav : styles.nav,
            {
              width: moderateScale(ISize + 20, 0.3),
            },
            styles.containerNav,
          ]}>
          <View
            style={
              navigation === route.name || navigation === undefined
                ? [styles.border, {borderColor: color, backgroundColor: color}]
                : {}
            }
          />
          <Icon name="home" size={moderateScale(ISize, 0.3)} color={color} />
        </View>
      );
      break;
    case 'Orders':
      IconComponent = (
        <View
          style={[
            navigation === route.name ? styles.activeNav : styles.nav,
            {
              width: moderateScale(ISize + 20, 0.3),
            },
            styles.containerNav,
          ]}>
          <View
            style={
              navigation === route.name
                ? [styles.border, {borderColor: color, backgroundColor: color}]
                : {}
            }
          />
          <FeatherIcon
            name="save"
            size={moderateScale(ISize, 0.3)}
            color={color}
          />
        </View>
      );
      break;
    case 'Categories':
      IconComponent = (
        <View
          style={[
            navigation === route.name ? styles.activeNav : styles.nav,
            {
              width: moderateScale(ISize + 20, 0.3),
            },
            styles.containerNav,
          ]}>
          <View
            style={
              navigation === route.name
                ? [
                    styles.border,
                    {borderColor: '#DCB46C', backgroundColor: '#DCB46C'},
                  ]
                : {}
            }
          />
          <MaterialIconsIcon
            name="category"
            size={moderateScale(ISize, 0.3)}
            color={'#DCB46C'}
          />
        </View>
      );
      break;
    case 'Wishlist':
      IconComponent = (
        <View
          style={[
            navigation === route.name ? styles.activeNav : styles.nav,
            {
              width: moderateScale(ISize + 20, 0.3),
            },
            styles.containerNav,
          ]}>
          <View
            style={
              navigation === route.name 
                ? [styles.border, {borderColor: color, backgroundColor: color}]
                : {}
            }
          />
          <FeatherIcon
            name="heart"
            size={moderateScale(ISize - 2, 0.3)}
            color={color}
          />
        </View>
      );
      break;
    case 'Profile':
      IconComponent = (
        <View
          style={[
            navigation === route.name ? styles.activeNav : styles.nav,
            {
              width: moderateScale(ISize + 20, 0.3),
            },
            styles.containerNav,
          ]}>
          <View
            style={
              navigation === route.name
                ? [styles.border, {borderColor: color, backgroundColor: color}]
                : {}
            }
          />
          <FontAwesome5Icon
            name="user-circle"
            size={moderateScale(ISize - 3, 0.3)}
            color={color}
          />
        </View>
      );
      break;
    default:
      IconComponent = (
        <View
          style={[
            navigation === route.name ? styles.activeNav : styles.nav,
            {
              width: moderateScale(ISize + 20, 0.3),
            },
            styles.containerNav,
          ]}>
          <View
            style={
              navigation === route.name
                ? [styles.border, {borderColor: color, backgroundColor: color}]
                : {}
            }
          />
          <Icon name="home" size={moderateScale(ISize, 0.3)} color={color} />
        </View>
      );
      break;
  }

  return IconComponent;
};
