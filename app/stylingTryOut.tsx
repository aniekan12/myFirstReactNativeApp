import { View, Text, StyleSheet } from "react-native";

export default function StylingTryOut() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>StyleSheet API</Text>
      <View style={styles.darkMode}>
        <Text style={styles.darkModeText}>
          testing dark mode
          <Text style={styles.boldText}>
            nesting this text to see if it'll be bold and white
          </Text>
        </Text>
      </View>
      <View
        style={[
          styles.box,
          styles.yellowContainerBg,
          styles.boxShadow,
          styles.androidElevation,
        ]}
      >
        <Text style={styles.title}>StyleSheet API</Text>
      </View>
      <View
        style={[
          styles.box,
          styles.greenContainerBg,
          styles.boxShadow,
          styles.androidElevation,
        ]}
      >
        <Text style={styles.title}>StyleSheet API</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "red",
    height: 600,
    margin: 30,
  },
  yellowContainerBg: {
    backgroundColor: "yellow",
  },
  darkModeText: {
    color: "white",
  },
  boldText: {
    fontWeight: "bold",
  },
  boxShadow: {
    shadowColor: "green",
    shadowOffset: {
      width: 6,
      height: 6,
    },
    shadowOpacity: 0.6,
    shadowRadius: 4,
  },
  androidElevation: {
    elevation: 5,
  },
  darkMode: {
    backgroundColor: "black",
  },
  box: {
    borderColor: "black",
    borderWidth: 2,
    borderStyle: "solid",
    height: 250,
    paddingVertical: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 20,
    width: 250,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
  },
  greenContainerBg: {
    backgroundColor: "green",
  },
  title: {
    color: "black",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
