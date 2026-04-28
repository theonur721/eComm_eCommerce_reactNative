import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeBanner from './components/HomeBanner';
import Categories from './components/Categories';
import BestSellerProducts from './components/BestSellerProducts';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      {/* Add your search bar here */}
      <Categories />

      {/* Banner */}
      <HomeBanner />

      {/* Best Seller Products */}
      <BestSellerProducts />
    </SafeAreaView>
  );
};

export default HomeScreen;
