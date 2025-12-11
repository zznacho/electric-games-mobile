import { useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";

export default function EditGame() {
  const { id } = useLocalSearchParams();

  return (
    <View style={{ flex: 1 }}>
      <Text>Editar juego: {id}</Text>
    </View>
  );
}
