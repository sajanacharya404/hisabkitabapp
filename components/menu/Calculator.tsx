import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const Calculator: React.FC = () => {
  const [expression, setExpression] = useState<string>("");

  const handleButtonPress = (value: string) => {
    setExpression((prevExpression) => prevExpression + value);
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleBackspace = () => {
    setExpression((prevExpression) => prevExpression.slice(0, -1));
  };

  const handleCalculate = () => {
    try {
      const result = eval(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.expressionContainer}>
        <Text style={styles.expression}>{expression}</Text>
      </View>
      <View style={styles.buttonContainer}>
        {/* Row 1 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("7")}
          >
            <Text style={styles.buttonText}>7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("8")}
          >
            <Text style={styles.buttonText}>8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("9")}
          >
            <Text style={styles.buttonText}>9</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("/")}
          >
            <Text style={styles.buttonText}>/</Text>
          </TouchableOpacity>
        </View>
        {/* Row 2 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("4")}
          >
            <Text style={styles.buttonText}>4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("5")}
          >
            <Text style={styles.buttonText}>5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("6")}
          >
            <Text style={styles.buttonText}>6</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("*")}
          >
            <Text style={styles.buttonText}>*</Text>
          </TouchableOpacity>
        </View>
        {/* Row 3 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("1")}
          >
            <Text style={styles.buttonText}>1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("2")}
          >
            <Text style={styles.buttonText}>2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("3")}
          >
            <Text style={styles.buttonText}>3</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("-")}
          >
            <Text style={styles.buttonText}>-</Text>
          </TouchableOpacity>
        </View>
        {/* Row 4 */}
        <View style={styles.row}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("0")}
          >
            <Text style={styles.buttonText}>0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress(".")}
          >
            <Text style={styles.buttonText}>.</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={handleBackspace}>
            <Text style={styles.buttonText}>←</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleButtonPress("+")}
          >
            <Text style={styles.buttonText}>+</Text>
          </TouchableOpacity>
        </View>
        {/* Row 5 */}
        <View style={styles.row}>
          <TouchableOpacity style={styles.clearButton} onPress={handleClear}>
            <Text style={styles.clearButtonText}>Clear</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.calculateButton}
            onPress={handleCalculate}
          >
            <Text style={styles.calculateButtonText}>=</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  expressionContainer: {
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  expression: {
    fontSize: 24,
  },
  buttonContainer: {
    flexDirection: "column",
  },
  row: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 5,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#e0e0e0",
    borderRadius: 5,
    width: 80,
    height: 80,
    margin: 5,
  },
  buttonText: {
    fontSize: 24,
  },
  clearButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ff9999",
    borderRadius: 5,
    width: 80,
    height: 80,
    margin: 5,
  },
  clearButtonText: {
    fontSize: 20,
  },
  calculateButton: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#99ff99",
    borderRadius: 5,
    width: 80,
    height: 80,
    margin: 5,
  },
  calculateButtonText: {
    fontSize: 24,
  },
});

export default Calculator;
