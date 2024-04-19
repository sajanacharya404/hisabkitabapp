import React from "react";
import { StyleSheet, View, StatusBar, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons"; // Import Ionicons from react-native-vector-icons

// custom import
import LoginPage from "./pages/LoginPage";
import OtpPage from "./pages/OtpPage";
import HomePage from "./pages/HomePage";
import Profile from "./components/Profile";
import Setting from "./components/Setting";

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
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({ navigation }) => ({
              headerShown: true,
              headerStyle: { backgroundColor: "#2cd380" },
              headerTintColor: "white",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="white"
                    style={{ marginLeft: 10 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
          <Stack.Screen
            name="Settings"
            component={Setting}
            options={({ navigation }) => ({
              headerShown: true,
              headerStyle: { backgroundColor: "#2cd380" },
              headerTintColor: "white",
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()}>
                  <Ionicons
                    name="arrow-back"
                    size={24}
                    color="white"
                    style={{ marginLeft: 10 }}
                  />
                </TouchableOpacity>
              ),
            })}
          />
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
