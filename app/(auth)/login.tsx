import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import api from "../api/api";
import { saveToken } from "../auth/authStore";
import { router } from "expo-router";

export default function Login() {
  const [usernameOrEmail, setUser] = useState("");
  const [password, setPass] = useState("");

  async function handleLogin() {
    try {
      const res = await api.post("/auth/login", {
        usernameOrEmail,
        password
      });

      await saveToken(res.data.token);

      Alert.alert("Bienvenido", "Login exitoso");
      router.replace("/"); // manda al home
    } catch (error) {
      Alert.alert("Error", "Credenciales incorrectas");
    }
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#0b0f13", padding: 20 }}>
      <Text style={{ color: "#fff", fontSize: 24, marginBottom: 20 }}>Iniciar Sesión</Text>

      <TextInput
        placeholder="Usuario o Email"
        placeholderTextColor="#777"
        style={{ backgroundColor: "#1a1f25", color: "#fff", padding: 10, borderRadius: 8 }}
        onChangeText={setUser}
      />

      <TextInput
        placeholder="Contraseña"
        placeholderTextColor="#777"
        secureTextEntry
        style={{
          backgroundColor: "#1a1f25",
          color: "#fff",
          padding: 10,
          borderRadius: 8,
          marginTop: 10
        }}
        onChangeText={setPass}
      />

      <TouchableOpacity
        onPress={handleLogin}
        style={{
          backgroundColor: "#4caf50",
          padding: 12,
          borderRadius: 8,
          marginTop: 20
        }}
      >
        <Text style={{ color: "#fff", fontWeight: "700", textAlign: "center" }}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}
