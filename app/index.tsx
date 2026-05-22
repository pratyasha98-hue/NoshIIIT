import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const menuItems = [
  { id: "1", vendor: "Chai Lelo", item: "Veg Thali", price: 80, quantity: 0 },
  { id: "2", vendor: "Chai Lelo", item: "Paneer Rice", price: 90 , quantity: 0},
  { id: "3", vendor: "Homy's Kitchen", item: "Rajma Chawal", price: 70, quantity: 0 },
  { id: "4", vendor: "Homy's Kitchen", item: "Chole Bhature", price: 75, quantity: 0 },
];

export default function HomeScreen() {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
      const existing = cart.find((cartItem) => cartItem.id === item.id);

      if(existing)  cart.map((cartItem))
  };

  const removeItems = (item) => {
    setCart(cart.filter((cartItem) => cartItem.id !== item.id));
  };
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Today's Menu 🍱</Text>
      <Text style={styles.cartCount}>{cart.length} item(s) in cart</Text>
      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.vendor}>{item.vendor}</Text>
            <Text style={styles.itemName}>{item.item}</Text>
            <Text style={styles.price}>₹{item.price}</Text>
            <Text style ={styles.qty}>(item.qty)</Text>
            <TouchableOpacity
              style={styles.button}
              onPress={() => addToCart(item)}
            >
              <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.removeButton}
              onPress={() => removeItems(item)}
            >
              <Text style={styles.buttonText}>Remove Item</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingTop: 60,
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 4,
  },
  cartCount: {
    fontSize: 14,
    color: "#f97316",
    marginBottom: 16,
    fontWeight: "600",
  },
  card: {
    backgroundColor: "#f9f9f9",
    padding: 16,
    borderRadius: 12,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#eee",
  },
  vendor: {
    fontSize: 12,
    color: "#f97316",
    fontWeight: "bold",
    marginBottom: 4,
  },
  itemName: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    color: "#444",
    marginBottom: 12,
  },
  button: {
    backgroundColor: "#f97316",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  removeButton: {
    backgroundColor: "#ef4444",
    padding: 10,
    borderRadius: 8,
    alignItems: "center",
    marginTop: 8,
  },
});
