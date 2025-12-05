import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function ProductCard({ item, onPress }) {
  const hasDiscount =
    typeof item.discountPercentage === 'number' && item.discountPercentage > 0;

  const discountedPrice = hasDiscount
    ? item.price * (1 - item.discountPercentage / 100)
    : item.price;

  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: item.thumbnail }} style={styles.image} />

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={2}>
          {item.title}
        </Text>

        <Text style={styles.description} numberOfLines={2}>
          {item.description}
        </Text>

        <View style={styles.priceRow}>
          <Text style={styles.price}>${discountedPrice.toFixed(2)}</Text>
          {hasDiscount ? (
            <Text style={styles.oldPrice}>${item.price.toFixed(2)}</Text>
          ) : null}
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    backgroundColor: '#1E1E1E',
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 12,
    overflow: 'hidden',
  },
  image: {
    width: 100,
    height: 100,
  },
  info: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 4,
  },
  description: {
    color: '#BBBBBB',
    fontSize: 12,
    marginBottom: 6,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    color: '#4CAF50',
    fontSize: 16,
    fontWeight: 'bold',
  },
  oldPrice: {
    color: '#888888',
    fontSize: 12,
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
});

export default ProductCard;
