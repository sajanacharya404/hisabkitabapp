import React from "react";
import { StyleSheet, View, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// custom import
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/HomePage";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2cd380" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: false, // Hide the header for all screens
          }}
        >
          <Stack.Screen name="Login" component={LoginPage} />
          <Stack.Screen name="Otp" component={OtpPage} />
          <Stack.Screen name="Home" component={HomePage} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
