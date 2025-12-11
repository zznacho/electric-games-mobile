// app/components/GameCard.tsx
import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BASE_URL } from "../api/api";


export default function GameCard({ game, onPress, onBuy }) {
  return (
    <View style={styles.card}>
      <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
        <Image
  source={{
    uri: game.image
      ? (game.image.startsWith("/uploads")
          ? BASE_URL + game.image
          : game.image)
      : require("../assets/electric-games.jpg")
  }}
  style={styles.cover}
  resizeMode="cover"
/>

      </TouchableOpacity>

      <View style={styles.info}>
        <Text style={styles.title} numberOfLines={1}>{game.name}</Text>
        <Text style={styles.subtitle} numberOfLines={2}>{game.short || game.description}</Text>

        <View style={styles.row}>
          <Text style={styles.price}>${game.price}</Text>
          <TouchableOpacity style={styles.buyBtn} onPress={onBuy}>
            <Text style={styles.buyText}>Comprar</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#111418",
    borderRadius: 8,
    overflow: "hidden",
    marginBottom: 14,
    shadowColor: "#000",
    shadowOpacity: 0.6,
    shadowRadius: 8,
    elevation: 6,
  },
  cover: {
    width: "100%",
    height: 160,
    backgroundColor: "#0b0f13",
  },
  info: {
    padding: 10,
  },
  title: {
    color: "#e6eef3",
    fontSize: 16,
    fontWeight: "700",
  },
  subtitle: {
    color: "#99a1ab",
    fontSize: 12,
    marginTop: 4,
  },
  row: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  price: {
    color: "#e6eef3",
    fontWeight: "700",
  },
  buyBtn: {
    backgroundColor: "#4caf50",
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 6,
  },
  buyText: {
    color: "#fff",
    fontWeight: "700",
  },
});
