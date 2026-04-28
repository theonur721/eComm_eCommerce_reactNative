import { FlatList, Image, StyleSheet, Text, View } from 'react-native';
import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../../store/Hooks';
import { getProductsThunk } from '../../../../store/thunks/ProductThunks';
import Badge from '../../../../components/badges/Badge';
import normalize from '../../../../utils/Normalize';
import { COLORS } from '../../../../theme/Colors';

const BestSellerProducts = () => {
  const dispatch = useAppDispatch();

  const { products, isLoading, error } = useAppSelector(
    state => state.products,
  );

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.bestSellerTitle}>Best Seller Products</Text>

      {isLoading && <Text style={styles.infoText}>Loading...</Text>}
      {error && <Text style={styles.errorText}>Error: {error}</Text>}

      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={products.slice(0, 7)}
        keyExtractor={item => item.id.toString()}
        contentContainerStyle={styles.listContent}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Image source={{ uri: item?.images?.[0] }} style={styles.img} />

            <View style={styles.content}>
              <Text numberOfLines={2} style={styles.title}>
                {item?.title}
              </Text>

              <Text numberOfLines={1} style={styles.category}>
                {item?.category?.name}
              </Text>

              <Text style={styles.price}>${item?.price}</Text>

              <View style={styles.badgeContainer}>
                <Badge
                  label="%20"
                  icon="pricetag"
                  bgColor="#FFE5E5"
                  textColor="#FF3B30"
                />
                <Badge
                  label="FREE"
                  icon="car"
                  bgColor="#E6F4EA"
                  textColor="#34C759"
                />
                <Badge
                  label="FAST"
                  icon="flash"
                  bgColor="#EAF2FF"
                  textColor="#007AFF"
                />
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default BestSellerProducts;

const styles = StyleSheet.create({
  wrapper: {
    marginTop: normalize(20),
  },
  bestSellerTitle: {
    fontSize: normalize(20),
    fontWeight: '700',
    color: COLORS.black,
    marginBottom: normalize(14),
    paddingHorizontal: normalize(2),
  },
  infoText: {
    fontSize: normalize(14),
    color: COLORS.gray,
    marginBottom: normalize(10),
  },
  errorText: {
    fontSize: normalize(14),
    color: '#E53935',
    marginBottom: normalize(10),
  },
  listContent: {
    paddingRight: normalize(10),
  },
  card: {
    width: normalize(190),
    minHeight: normalize(330),
    backgroundColor: COLORS.white,
    borderRadius: normalize(16),
    marginRight: normalize(12),
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 4,
  },
  img: {
    width: '100%',
    height: normalize(170),
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    padding: normalize(12),
    justifyContent: 'space-between',
  },
  title: {
    fontSize: normalize(14),
    fontWeight: '700',
    color: COLORS.black,
    lineHeight: normalize(20),
    minHeight: normalize(40),
    marginBottom: normalize(6),
  },
  category: {
    fontSize: normalize(12),
    color: COLORS.gray,
    textTransform: 'capitalize',
    marginBottom: normalize(8),
  },
  price: {
    fontSize: normalize(16),
    fontWeight: '700',
    color: '#d2342c',
    marginBottom: normalize(12),
    textAlign: 'right',
    marginTop: normalize(6),
  },
  badgeContainer: {
    flexDirection: 'row',
    gap: normalize(3),
    alignItems: 'flex-end',
    marginTop: 'auto',
  },
});
