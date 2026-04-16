import { View, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useMusic } from "../../context/MusicContext";

export default function PlayerControls() {
  const {
    shuffleOn,
    repeatOn,
    playNextSong,
    playPreviousSong,
    toggleShuffle,
    toggleRepeat,
  } = useMusic();

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.sideButton} onPress={toggleShuffle}>
        <Ionicons name="shuffle" size={22} color={shuffleOn ? "#FF4FD8" : "#A1A1B3"}/>
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={playPreviousSong}>
        <Ionicons name="play-skip-back" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.playButton}>
        <Ionicons name="pause" size={30} color="#0E0E12" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.navButton} onPress={playNextSong}>
        <Ionicons name="play-skip-forward" size={28} color="#FFFFFF" />
      </TouchableOpacity>

      <TouchableOpacity style={styles.sideButton} onPress={toggleRepeat}>
        <Ionicons name="repeat" size={22} color={repeatOn ? "#FF4FD8" : "#A1A1B3"} />
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