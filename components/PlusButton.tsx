import React, { useState, useRef } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  Modal,
  TextInput,
  View,
  Button,
  Text,
  Animated,
  Easing,
  TouchableWithoutFeedback,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

const PlusButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [input3, setInput3] = useState("");
  const [input4, setInput4] = useState("");
  const fadeAnim = useRef(new Animated.Value(0)).current;

  const handleOpen = () => {
    setModalVisible(true);
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const handleClose = () => {
    Animated.timing(fadeAnim, {
      toValue: 0,
      duration: 300,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start(() => {
      setModalVisible(false);
      setInput1("");
      setInput2("");
      setInput3("");
      setInput4("");
    });
  };

  const handleSubmit = () => {
    // Handle form submission here
    console.log("Submitted:", input1, input2, input3, input4);
    handleClose();
  };

  const handleModalPress = () => {
    // Close the modal when clicked outside of it
    handleClose();
  };

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <MaterialCommunityIcons name="plus" size={24} color="white" />
      </TouchableOpacity>
      <Modal
        animationType="none"
        transparent={true}
        visible={modalVisible}
        onRequestClose={handleClose}
      >
        <TouchableWithoutFeedback onPress={handleModalPress}>
          <View style={styles.centeredView}>
            <Animated.View style={[styles.modalView, { opacity: fadeAnim }]}>
              <TouchableOpacity
                style={styles.closeButton}
                onPress={handleClose}
              >
                <MaterialCommunityIcons name="close" size={24} color="black" />
              </TouchableOpacity>
              <Text style={styles.modalTitle}>Enter Details</Text>
              <View style={styles.inputContainer}>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Full Name"
                    value={input1}
                    onChangeText={setInput1}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Email Address"
                    value={input2}
                    onChangeText={setInput2}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Password"
                    secureTextEntry={true}
                    value={input3}
                    onChangeText={setInput3}
                  />
                </View>
                <View style={styles.inputWrapper}>
                  <TextInput
                    style={styles.input}
                    placeholder="Confirm Password"
                    secureTextEntry={true}
                    value={input4}
                    onChangeText={setInput4}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.addbutton} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Submit</Text>
              </TouchableOpacity>
            </Animated.View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  button: {
    position: "absolute",
    bottom: 80,
    right: 30,
    backgroundColor: "#2cd380",
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    elevation: 3,
  },
  addbutton: {
    backgroundColor: "#2cd380",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 30,
    elevation: 3,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
  },
  modalTitle: {
    marginBottom: 20,
    fontSize: 24,
    fontWeight: "bold",
    color: "#333",
  },
  closeButton: {
    position: "absolute",
    top: 20,
    right: 10,
  },
  inputContainer: {
    width: 200,
    marginBottom: 20,
  },
  inputWrapper: {
    width: "100%",
    marginBottom: 10,
  },
  input: {
    height: 50,
    width: "100%",
    backgroundColor: "#f0f0f0",
    borderRadius: 10,
    paddingHorizontal: 20,
    fontSize: 18,
    color: "#333",
  },
});

export default PlusButton;
