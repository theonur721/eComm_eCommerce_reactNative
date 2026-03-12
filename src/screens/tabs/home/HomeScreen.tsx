import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import HomeBanner from './components/HomeBanner';
import Categories from './components/Categories';

const HomeScreen: React.FC = () => {
  return (
    <SafeAreaView>
      {/* Add your search bar here */}
      <Categories />

      {/* Banner */}
      <HomeBanner />
    </SafeAreaView>
  );
};

export default HomeScreen;
