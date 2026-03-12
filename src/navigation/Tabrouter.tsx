import React from 'react';
import { StyleSheet } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from '../screens/tabs/home/HomeScreen';
import SearchScreen from '../screens/tabs/search/SearchScreen';
import FavoritesScreen from '../screens/tabs/favorites/FavoritesScreen';
import CartScreen from '../screens/tabs/cart/CartScreen';
import ProfileScreen from '../screens/tabs/profile/ProfileScreen';
import { ROUTES } from './Routes';
import normalize from '../utils/Normalize';
import { COLORS } from '../theme/Colors';

type TabParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
  Cart: undefined;
  Profile: undefined;
};

const Tab = createBottomTabNavigator<TabParamList>();

const TabRouter: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarShowLabel: true,
        tabBarActiveTintColor: COLORS.primary,
        tabBarInactiveTintColor: COLORS.gray,
        tabBarStyle: styles.tabBar,
        tabBarLabelStyle: styles.tabBarLabel,
        tabBarIcon: ({ color, size, focused }) => {
          let iconName: string = 'ellipse';

          if (route.name === ROUTES.Home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === ROUTES.Search) {
            iconName = focused ? 'search' : 'search-outline';
          } else if (route.name === ROUTES.Favorites) {
            iconName = focused ? 'heart' : 'heart-outline';
          } else if (route.name === ROUTES.Cart) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === ROUTES.Profile) {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name={ROUTES.Home} component={HomeScreen} />
      <Tab.Screen name={ROUTES.Search} component={SearchScreen} />
      <Tab.Screen name={ROUTES.Favorites} component={FavoritesScreen} />
      <Tab.Screen name={ROUTES.Cart} component={CartScreen} />
      <Tab.Screen name={ROUTES.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
};

export default TabRouter;

const styles = StyleSheet.create({
  tabBar: {
    height: normalize(82),
    paddingTop: normalize(8),
    paddingBottom: normalize(10),
    backgroundColor: COLORS.white,
    borderTopWidth: 0,
    elevation: 8,
  },
  tabBarLabel: {
    fontSize: normalize(11),
    marginBottom: normalize(20),
  },
});
