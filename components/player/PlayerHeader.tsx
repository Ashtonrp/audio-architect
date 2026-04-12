import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PlayerHeader() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="chevron-down" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <View style={styles.center}>
        <Text style={styles.label}>Now Playing</Text>
      </View>

      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="ellipsis-horizontal" size={24} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 40,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },
  center: {
    alignItems: "center",
  },
  label: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});