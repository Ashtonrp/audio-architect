import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function PlayerControls() {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideButton}>
        <Ionicons name="shuffle" size={22} color="#A1A1B3" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="play-skip-back" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.playButton}>
        <Ionicons name="pause" size={30} color="#0E0E12" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton}>
        <Ionicons name="play-skip-forward" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.sideButton}>
        <Ionicons name="repeat" size={22} color="#A1A1B3" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  sideButton: {
    width: 40,
    alignItems: "center",
    justifyContent: "center",
  },
  navButton: {
    width: 48,
    alignItems: "center",
    justifyContent: "center",
  },
  playButton: {
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "center",
  },
});