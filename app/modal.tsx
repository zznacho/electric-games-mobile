import { View, Text, StyleSheet, Pressable } from "react-native";
import { Stack, useRouter } from "expo-router";

export default function ModalScreen() {
  const router = useRouter();

  return (
    <>
      <Stack.Screen options={{ title: "Información" }} />

      <View style={styles.container}>
        <Text style={styles.title}>Ventana Modal</Text>
        <Text style={styles.text}>
          Esta es una pantalla modal del proyecto. Podés usarla para mostrar
          información adicional, configuración o cualquier pantalla especial.
        </Text>

        <Pressable style={styles.button} onPress={() => router.back()}>
          <Text style={styles.buttonText}>Cerrar</Text>
        </Pressable>
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
    fontSize: 24,
    marginBottom: 16,
  },
  text: {
    color: "#ddd",
    fontSize: 16,
    marginBottom: 40,
  },
  button: {
    backgroundColor: "#1abc9c",
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: "center",
  },
  buttonText: {
    color: "#0b0f13",
    fontSize: 18,
    fontWeight: "bold",
  },
});
