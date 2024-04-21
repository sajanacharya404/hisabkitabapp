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

const Menu = ({ isMenuOpen, menuAnimation, onClose }) => {
  const menuRef = useRef(null);

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

  const handleOverlayPress = () => {
    onClose();
  };

  const handleMenuPress = () => {
    // Prevent closing the menu when clicking inside the menu itself
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
      <TouchableOpacity style={styles.menuContainer} onPress={handleMenuPress}>
        <Text style={styles.menu_top}>Welcome, Sajan</Text>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faChartBar} style={styles.icon} />
            <Text style={styles.menuItemText}>Financial Reports</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faFileInvoiceDollar} style={styles.icon} />
            <Text style={styles.menuItemText}>Invoices</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faWallet} style={styles.icon} />
            <Text style={styles.menuItemText}>Wallet</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
            <FontAwesomeIcon icon={faMoneyCheckAlt} style={styles.icon} />
            <Text style={styles.menuItemText}>Payments</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.menuItem}>
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
      {isMenuOpen && (
        <TouchableOpacity
          style={styles.overlay}
          onPress={handleOverlayPress}
          activeOpacity={1}
        />
      )}
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  menu: {
    position: "absolute",
    top: 0,
    left: 0,
    width: 300, // Adjust the width as needed
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
  menu_top: {
    height: 90,
    backgroundColor: "#2cd380",
    color: "white",
    textAlign: "center",
    justifyContent: "center",
    paddingTop: 30,
    fontSize: 25,
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
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default Menu;
