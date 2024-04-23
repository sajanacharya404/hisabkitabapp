import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface Item {
  name: string;
  price: number;
}

const Invoice: React.FC = () => {
  // Sample items data
  const items: Item[] = [
    { name: "Item 1", price: 10.0 },
    { name: "Item 2", price: 20.0 },
    // Add more items as needed
  ];

  const totalAmount = items.reduce((total, item) => total + item.price, 0);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Invoice</Text>
      </View>

      {/* Items List */}
      <View style={styles.itemsList}>
        {items.map((item, index) => (
          <View style={styles.item} key={index}>
            <Text>{item.name}</Text>
            <Text>${item.price.toFixed(2)}</Text>
          </View>
        ))}
      </View>

      {/* Total */}
      <View style={styles.total}>
        <Text style={styles.totalText}>Total: ${totalAmount.toFixed(2)}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  header: {
    alignItems: "center",
    marginBottom: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  itemsList: {
    marginBottom: 20,
  },
  item: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
  total: {
    borderTopWidth: 1,
    paddingTop: 10,
    alignItems: "flex-end",
  },
  totalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Invoice;
