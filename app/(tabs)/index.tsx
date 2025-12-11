import { View, Text, StyleSheet, FlatList, Dimensions } from "react-native";
import React, { useEffect, useState } from "react";
import GameCard from "../../components/GameCard";
import api from "../api/api";
import { useRouter } from "expo-router";

const numCols = 2;
const screenW = Dimensions.get("window").width;
const itemW = (screenW - 48) / numCols;

export default function HomeScreen() {
  const [games, setGames] = useState([]);
  const router = useRouter();

  useEffect(() => {
    api.get("/games")
      .then((res) => {
        console.log("JUEGOS RECIBIDOS:", res.data);
        setGames(res.data);
      })
      .catch((err) => {
        console.log("ERROR AL CARGAR JUEGOS:", err);
      });
  }, []);

  return (
    <View style={styles.page}>
      {games.length === 0 ? (
        <Text style={{ color: "#fff", textAlign: "center", marginTop: 40 }}>
          No hay juegos disponibles.
        </Text>
      ) : (
        <FlatList
          data={games}
          keyExtractor={(i) => i._id}
          numColumns={numCols}
          columnWrapperStyle={{
            justifyContent: "space-between",
            paddingHorizontal: 16,
          }}
          renderItem={({ item }) => (
            <View style={{ width: itemW }}>
              <GameCard
                game={item}
                onPress={() => router.push(`/game/${item._id}`)}
                onBuy={() => router.push(`/game/${item._id}`)}
                buyLabel="Ver"
              />
            </View>
          )}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0b0f13",
    paddingTop: 8,
  },
});
