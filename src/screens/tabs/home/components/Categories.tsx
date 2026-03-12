import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { COLORS } from '../../../../theme/Colors';

const Categories: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text>Categories</Text>
    </View>
  );
};

export default Categories;

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: COLORS.gray,
    marginBottom: 10,
  },
});
