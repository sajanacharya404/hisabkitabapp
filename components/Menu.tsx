import React, { useRef, useEffect } from "react";
import {
  View,
  Animated,
  TouchableOpacity,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import {
  faTimes,
  faChartBar,
  faFileInvoiceDollar,
  faWallet,
  faMoneyCheckAlt,
  faCalculator,
  faFileAlt,
  faBalanceScale,
  faMoneyBill,
  faReceipt,
  faCreditCard,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigation } from "@react-navigation/native";

const Menu = ({ isMenuOpen, menuAnimation, onClose }) => {
  const menuRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    if (isMenuOpen) {
      openMenu();
    } else {
      closeMenu();
    }
  }, [isMenuOpen]);

  const openMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: { x: 0, y: 0 },
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const closeMenu = () => {
    Animated.timing(menuAnimation, {
      toValue: { x: -300, y: 0 }, // Adjust the value according to your menu width
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const navigateToCalculater = () => {
    navigation.navigate("Calculater"); // Navigate to the profile screen
  };
  const navigateToInvoice = () => {
    navigation.navigate("Invoice"); // Navigate to the profile screen
  };
  const navigateToWallet = () => {
    navigation.navigate("Wallet"); // Navigate to the profile screen
  };
  const navigateToPayment = () => {
    navigation.navigate("Payment"); // Navigate to the profile screen
  };

  return (
    <Animated.View
      ref={menuRef}
      style={[
        styles.menu,
        {
          transform: [{ translateX: menuAnimation.x }],
        },
      ]}
    >
      <TouchableOpacity style={styles.menuContainer}>
        <View style={styles.menuHeader}>
          <Text style={styles.menuTitle}>Welcome, Sajan</Text>
          <TouchableOpacity style={styles.closeButton} onPress={onClose}>
            <FontAwesomeIcon icon={faTimes} style={styles.closeIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faChartBar} style={styles.icon} />
            <Text style={styles.menuItemText}>Financial Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToInvoice}>
            <FontAwesomeIcon icon={faFileInvoiceDollar} style={styles.icon} />
            <Text style={styles.menuItemText}>Invoices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToWallet}>
            <FontAwesomeIcon icon={faWallet} style={styles.icon} />
            <Text style={styles.menuItemText}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem} onPress={navigateToPayment}>
            <FontAwesomeIcon icon={faMoneyCheckAlt} style={styles.icon} />
            <Text style={styles.menuItemText}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.menuItem}
            onPress={navigateToCalculater}
          >
            <FontAwesomeIcon icon={faCalculator} style={styles.icon} />
            <Text style={styles.menuItemText}>Calculator</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faFileAlt} style={styles.icon} />
            <Text style={styles.menuItemText}>Documents</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faBalanceScale} style={styles.icon} />
            <Text style={styles.menuItemText}>Balances</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faMoneyBill} style={styles.icon} />
            <Text style={styles.menuItemText}>Bills</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faReceipt} style={styles.icon} />
            <Text style={styles.menuItemText}>Receipts</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faCreditCard} style={styles.icon} />
            <Text style={styles.menuItemText}>Credit Cards</Text>
          </TouchableOpacity>
          {/* Add more menu items here */}
        </ScrollView>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 200, // Adjust the width as needed
    height: "100%",
    backgroundColor: "#f8f9fa",
    borderColor: "#ccc",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  menuContainer: {
    flex: 1,
  },
  menuHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    backgroundColor: "#2cd380",
  },
  menuTitle: {
    color: "white",
    fontSize: 20,
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    color: "white",
    fontSize: 20,
  },
  scrollContainer: {
    flexGrow: 1,
    paddingBottom: 20, // Add some padding to the bottom to prevent content from being hidden behind the navigation bar
  },
  menuItem: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 4,
    backgroundColor: "#f8f9fa",
    flexDirection: "row",
    alignItems: "center",
  },
  menuItemText: {
    fontSize: 16,
    color: "black",
    marginLeft: 10,
  },
  icon: {
    color: "#2cd380",
    fontSize: 24,
  },
});

export default Menu;
