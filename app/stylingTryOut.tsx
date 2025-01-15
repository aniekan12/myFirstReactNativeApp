import { View, Text, StyleSheet } from "react-native";

export default function StylingTryOut() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
      <Text style={styles.title}>StyleSheet API</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "red",
    // height: 100,
    padding: 60,
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
