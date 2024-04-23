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
import Account from "./components/setting/Account";
import Privacy from "./components/setting/Privacy";
import PrivacyPolicy from "./components/setting/PrivacyPolicy";
import Termsofuse from "./components/setting/Termsofuse";
import TermsCondition from "./components/setting/TermsCondition";
import Notification from "./components/setting/Notification";
import Calculator from "./components/menu/Calculator";
import Invoice from "./components/menu/Invoice";

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#2cd380" barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Login"
            component={LoginPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Otp"
            component={OtpPage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Home"
            component={HomePage}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="Profile"
            component={Profile}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="Settings"
            component={Setting}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="Account"
            component={Account}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="Privacy"
            component={Privacy}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="PrivacyPolicy"
            component={PrivacyPolicy}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="TermsOfUse"
            component={Termsofuse}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="TermsCondition"
            component={TermsCondition}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="Notification"
            component={Notification}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="Calculater"
            component={Calculator}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
            })}
          />
          <Stack.Screen
            name="Invoice"
            component={Invoice}
            options={({ route }) => ({
              headerStyle: {
                backgroundColor: "#2cd380", // Set background color to green
              },
              headerTintColor: "white",
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
