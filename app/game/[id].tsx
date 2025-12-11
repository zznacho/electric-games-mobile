// app/game/[id].tsx
import { useLocalSearchParams } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import api from "../../api/api";

export default function GameDetail() {
  const { id } = useLocalSearchParams();
  const [game, setGame] = useState(null);

  useEffect(() => {
    if (!id) return;
    api.get(`/games/${id}`).then(r => setGame(r.data)).catch(console.log);
  }, [id]);

  if (!game) return <View style={styles.page}><Text style={{color:"#fff"}}>Cargando...</Text></View>;

  return (
    <ScrollView style={styles.page}>
      <Image 
  source={{ uri: `http://192.168.0.17:5000${game.image}` }} 
  style={styles.cover} 
/>

      <View style={styles.content}>
        <Text style={styles.title}>{game.name}</Text>
        <Text style={styles.desc}>{game.description}</Text>

        <View style={{ flexDirection: "row", marginTop: 16, gap: 12 }}>
          <TouchableOpacity style={styles.buyBtn}>
            <Text style={styles.buyText}>Comprar ${game.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: { flex: 1, backgroundColor: "#0b0f13" },
  cover: { width: "100%", height: 220 },
  content: { padding: 16 },
  title: { color: "#e6eef3", fontSize: 22, fontWeight: "800" },
  desc: { color: "#99a1ab", marginTop: 8 },
  buyBtn: { backgroundColor: "#4caf50", padding: 12, borderRadius: 8 },
  buyText: { color: "#fff", fontWeight: "700" },
});
