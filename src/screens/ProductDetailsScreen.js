import {
    ActivityIndicator,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import useProductRequest from '../hooks/useProductRequest';

function ProductDetailsScreen({ route }) {
  const { id } = route.params;

  const { data: product, loading, error, retry } = useProductRequest(
    `/products/${id}`,
    'Erro ao carregar detalhes do produto.'
  );

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="small" />
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.center}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity accessibilityRole="button" onPress={retry}>
          <Text style={styles.errorText}>Tentar novamente</Text>
        </TouchableOpacity>
      </View>
    );
  }

  if (!product) {
    return null;
  }

  const hasDiscount =
    typeof product.discountPercentage === 'number' &&
    product.discountPercentage > 0;

  const discountedPrice = hasDiscount
    ? product.price * (1 - product.discountPercentage / 100)
    : product.price;

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain" />

      <Text style={styles.title}>{product.title}</Text>

      {product.brand ? (
        <Text style={styles.brand}>{product.brand}</Text>
      ) : null}

      <View style={styles.priceRow}>
        <Text style={styles.price}>${discountedPrice.toFixed(2)}</Text>
        {hasDiscount ? (
          <>
            <Text style={styles.oldPrice}>${product.price.toFixed(2)}</Text>
            <Text style={styles.discount}>
              {product.discountPercentage}% OFF
            </Text>
          </>
        ) : null}
      </View>

      <Text style={styles.description}>{product.description}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,
    backgroundColor: '#121212',
  },
  center: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: 260,
    backgroundColor: '#F2F2F2',
    borderRadius: 12,
    marginBottom: 16,
  },
  title: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  brand: {
    color: '#BBBBBB',
    fontSize: 14,
    marginBottom: 12,
  },
  priceRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  price: {
    color: '#4CAF50',
    fontSize: 20,
    fontWeight: 'bold',
  },
  oldPrice: {
    color: '#888888',
    fontSize: 14,
    textDecorationLine: 'line-through',
    marginLeft: 8,
  },
  discount: {
    color: '#FFEB3B',
    fontSize: 14,
    marginLeft: 8,
    fontWeight: '600',
  },
  description: {
    color: '#DDDDDD',
    fontSize: 14,
    lineHeight: 20,
  },
  errorText: {
    paddingVertical: 8,
    color: '#FF5252',
  },
});

export default ProductDetailsScreen;
