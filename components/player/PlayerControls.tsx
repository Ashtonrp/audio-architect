import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PlayerControls() {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="play-skip-back" size={34} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.playButton} activeOpacity={0.8}>
        <Ionicons name="pause" size={34} color="#05050A" />
      </TouchableOpacity>

      <TouchableOpacity activeOpacity={0.8}>
        <Ionicons name="play-skip-forward" size={34} color="#FFFFFF" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  playButton: {
    width: 74,
    height: 74,
    borderRadius: 37,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});