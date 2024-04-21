import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";

const TermsCondition: React.FC = () => {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.content}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed luctus
        libero eget augue efficitur, et tempus ligula pulvinar. Morbi eget nisl
        nisi. Nulla facilisi. Nulla et luctus ipsum. Nullam nec diam nec leo
        sollicitudin pharetra. Sed non tortor non libero facilisis rhoncus id
        eget magna. Vestibulum eleifend ex non purus venenatis, in lacinia
        libero congue. Aenean bibendum arcu ac dolor vestibulum blandit.
      </Text>
      <Text style={styles.content}>
        Vivamus sed dui in purus tempus gravida. Aliquam nec dui vitae nunc
        aliquet egestas. In nec elit vestibulum, suscipit purus quis, lacinia
        libero. Curabitur condimentum, velit sit amet blandit interdum, ipsum
        quam finibus velit, nec efficitur est nulla id turpis. Aliquam id
        sollicitudin est. Suspendisse potenti. Cras finibus nulla sit amet
        laoreet lobortis. Proin vitae ante et eros fermentum pharetra nec nec
        elit. Nullam euismod ante sit amet elit laoreet consequat.
      </Text>
      <Text style={styles.content}>
        Vivamus sed dui in purus tempus gravida. Aliquam nec dui vitae nunc
        aliquet egestas. In nec elit vestibulum, suscipit purus quis, lacinia
        libero. Curabitur condimentum, velit sit amet blandit interdum, ipsum
        quam finibus velit, nec efficitur est nulla id turpis. Aliquam id
        sollicitudin est. Suspendisse potenti. Cras finibus nulla sit amet
        laoreet lobortis. Proin vitae ante et eros fermentum pharetra nec nec
        elit. Nullam euismod ante sit amet elit laoreet consequat.
      </Text>
      <Text style={styles.content}>
        Vivamus sed dui in purus tempus gravida. Aliquam nec dui vitae nunc
        aliquet egestas. In nec elit vestibulum, suscipit purus quis, lacinia
        libero. Curabitur condimentum, velit sit amet blandit interdum, ipsum
        quam finibus velit, nec efficitur est nulla id turpis. Aliquam id
        sollicitudin est. Suspendisse potenti. Cras finibus nulla sit amet
        laoreet lobortis. Proin vitae ante et eros fermentum pharetra nec nec
        elit. Nullam euismod ante sit amet elit laoreet consequat.
      </Text>
      <Text style={styles.content}>
        Vivamus sed dui in purus tempus gravida. Aliquam nec dui vitae nunc
        aliquet egestas. In nec elit vestibulum, suscipit purus quis, lacinia
        libero. Curabitur condimentum, velit sit amet blandit interdum, ipsum
        quam finibus velit, nec efficitur est nulla id turpis. Aliquam id
        sollicitudin est. Suspendisse potenti. Cras finibus nulla sit amet
        laoreet lobortis. Proin vitae ante et eros fermentum pharetra nec nec
        elit. Nullam euismod ante sit amet elit laoreet consequat.
      </Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    marginTop: 10,
    paddingHorizontal: 20,
  },

  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 10,
    textAlign: "justify",
  },
});

export default TermsCondition;
