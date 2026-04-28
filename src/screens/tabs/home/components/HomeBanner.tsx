import { Image, StyleSheet, View } from 'react-native';
import React from 'react';
import normalize from '../../../../utils/Normalize';

const HomeBanner: React.FC = () => {
  return (
    <View>
      <Image
        source={require('../../../../assets/banner.jpg')}
        style={styles.img}
        resizeMode="cover"
      />
    </View>
  );
};

export default HomeBanner;

const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: normalize(150),
    marginVertical: normalize(8),
  },
});
