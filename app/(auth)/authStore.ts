import AsyncStorage from "@react-native-async-storage/async-storage";

export async function saveToken(token) {
  try {
    await AsyncStorage.setItem("token", token);
  } catch (e) {
    console.log("Error guardando token", e);
  }
}

export async function getToken() {
  try {
    return await AsyncStorage.getItem("token");
  } catch (e) {
    console.log("Error obteniendo token", e);
    return null;
  }
}

export async function logout() {
  try {
    await AsyncStorage.removeItem("token");
  } catch (e) {
    console.log("Error eliminando token", e);
  }
}
