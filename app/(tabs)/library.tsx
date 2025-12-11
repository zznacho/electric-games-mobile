import { View, Text, StyleSheet } from "react-native";

export default function LibraryScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Your Library is empty...</Text>
      <Text style={styles.sub}>Buy a game to see it here!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
  text: {
    color: "#1abc9c",
    fontSize: 22,
    marginBottom: 8,
  },
  sub: {
    color: "#aaa",
  },
});
