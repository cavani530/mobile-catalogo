import { useNavigation } from '@react-navigation/native';
import { useEffect, useState } from 'react';
import {
    ActivityIndicator,
    FlatList,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import { useDispatch } from 'react-redux';
import ProductCard from '../components/ProductCard';
import api from '../services/api';
import { logout } from '../store/slices/authSlice';

const CATEGORIES = {
  men: [
    { key: 'mens-shirts', label: 'Camisas' },
    { key: 'mens-shoes', label: 'Sapatos' },
    { key: 'mens-watches', label: 'Relógios' },
  ],
  women: [
    { key: 'womens-bags', label: 'Bolsas' },
    { key: 'womens-dresses', label: 'Vestidos' },
    { key: 'womens-jewellery', label: 'Joias' },
    { key: 'womens-shoes', label: 'Sapatos' },
    { key: 'womens-watches', label: 'Relógios' },
  ],
};

function ProductListScreen({ gender }) {
  const [selectedCategory, setSelectedCategory] = useState(
    CATEGORIES[gender][0].key
  );
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const genderTitle = gender === 'men' ? 'Masculino' : 'Feminino';

  useEffect(() => {
    fetchProducts(selectedCategory);
  }, [selectedCategory]);

  const fetchProducts = async (category) => {
    try {
      setLoading(true);
      setError('');
      const response = await api.get(`/products/category/${category}`);
      setProducts(response.data.products || []);
    } catch (err) {
      console.log(err);
      setError('Erro ao carregar produtos. Tente novamente.');
    } finally {
      setLoading(false);
    }
  };

  const handleProductPress = (item) => {
    navigation.navigate('ProductDetails', { id: item.id });
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <View style={styles.container}>
      {/* Cabeçalho */}
      <View style={styles.header}>
        <Text style={styles.title}>Produtos - {genderTitle}</Text>
        <TouchableOpacity onPress={handleLogout}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {/* Abas de categorias */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoryBar}
      >
        {CATEGORIES[gender].map((cat) => (
          <TouchableOpacity
            key={cat.key}
            style={[
              styles.categoryButton,
              selectedCategory === cat.key && styles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(cat.key)}
          >
            <Text
              style={[
                styles.categoryButtonText,
                selectedCategory === cat.key &&
                  styles.categoryButtonTextActive,
              ]}
            >
              {cat.label}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      {loading && (
        <ActivityIndicator style={styles.loading} size="small" />
      )}

      {error ? <Text style={styles.errorText}>{error}</Text> : null}

      <FlatList
        data={products}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ProductCard item={item} onPress={() => handleProductPress(item)} />
        )}
        contentContainerStyle={styles.listContent}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 12,
  },
  header: {
    paddingHorizontal: 16,
    paddingBottom: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutText: {
    color: '#FF5252',
    fontSize: 14,
    fontWeight: '600',
  },
  categoryBar: {
    maxHeight: 50,
    paddingHorizontal: 8,
    marginBottom: 8,
  },
  categoryButton: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#555555',
    marginHorizontal: 6,
  },
  categoryButtonActive: {
    backgroundColor: '#E53935',
    borderColor: '#E53935',
  },
  categoryButtonText: {
    color: '#FFFFFF',
    fontSize: 14,
  },
  categoryButtonTextActive: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  loading: {
    marginTop: 16,
  },
  errorText: {
    color: '#FF5252',
    textAlign: 'center',
    marginVertical: 8,
  },
  listContent: {
    paddingBottom: 16,
  },
});

export default ProductListScreen;
