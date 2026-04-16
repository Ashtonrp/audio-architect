import { StyleSheet, View } from "react-native";
import Screen from "../../components/ui/Screen";
import PlayerHeader from "../../components/player/PlayerHeader";
import AlbumArtwork from "../../components/player/AlbumArtwork";
import TrackInfo from "../../components/player/TrackInfo";
import ProgressBar from "../../components/player/ProgressBar";
import PlayerControls from "../../components/player/PlayerControls";
import { useMusic } from "../../context/MusicContext";

export default function PlayerScreen() {
  const { currentSong } = useMusic();

  if (!currentSong) {
    return (
      <Screen>
        <View style={styles.container} />
      </Screen>
    );
  }

  return (
    <Screen>
      <View style={styles.container}>
        <PlayerHeader />

        <AlbumArtwork image={currentSong.image} />

        <TrackInfo
          title={currentSong.title}
          artist={currentSong.artist}
        />

        <ProgressBar
          currentTime="1:42"
          duration="3:58"
          progress={0.43}
        />

        <PlayerControls />
      </View>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 120,
    justifyContent: "flex-start",
  },
});