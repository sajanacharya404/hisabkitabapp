import React from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";

interface Transaction {
  id: string;
  title: string;
  amount: string;
}

const Wallet: React.FC = () => {
  // Sample transaction data
  const transactions: Transaction[] = [
    { id: "1", title: "Deposit", amount: "+$100.00" },
    { id: "2", title: "Withdrawal", amount: "-$50.00" },
    // Add more transactions as needed
  ];

  // Calculate total balance
  const totalBalance: number = transactions.reduce(
    (total: number, transaction: Transaction) => {
      const amount: number = parseFloat(
        transaction.amount.replace(/[^\d.-]/g, "")
      );
      return total + amount;
    },
    0
  );

  const renderItem = ({ item }: { item: Transaction }) => (
    <View style={styles.transactionItem}>
      <Text style={styles.transactionTitle}>{item.title}</Text>
      <Text style={styles.transactionAmount}>{item.amount}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerText}>Wallet</Text>
        <Text style={styles.balanceText}>
          Balance: ${totalBalance.toFixed(2)}
        </Text>
      </View>

      {/* Transaction List */}
      <FlatList
        data={transactions}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.transactionList}
      />
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
    marginBottom: 20,
    alignItems: "center",
  },
  headerText: {
    fontSize: 24,
    fontWeight: "bold",
  },
  balanceText: {
    fontSize: 18,
    marginTop: 10,
  },
  transactionList: {
    flexGrow: 1,
  },
  transactionItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  transactionTitle: {
    fontSize: 16,
  },
  transactionAmount: {
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Wallet;
