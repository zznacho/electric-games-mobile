import { View, Text, StyleSheet, Pressable } from "react-native";
import { Stack } from "expo-router";

export default function TwoScreen() {
  return (
    <>
      <Stack.Screen options={{ title: "Pantalla Two" }} />

      <View style={styles.container}>
        <Text style={styles.title}>Segunda pestaña</Text>
        <Text style={styles.text}>
          Esta es una pantalla de ejemplo. Podés reemplazarla por lo que quieras
          (lista de juegos, configuración, perfil, etc).
        </Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0b0f13",
    padding: 20,
    justifyContent: "center",
  },
  title: {
    color: "white",
    fontSize: 26,
    marginBottom: 16,
    fontWeight: "bold",
  },
  text: {
    color: "#ccc",
    fontSize: 16,
  },
});
