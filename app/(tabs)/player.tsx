import { StyleSheet, View } from "react-native";
import Screen from "../../components/ui/Screen";
import PlayerHeader from "../../components/player/PlayerHeader";
import AlbumArtwork from "../../components/player/AlbumArtwork";
import TrackInfo from "../../components/player/TrackInfo";
import ProgressBar from "../../components/player/ProgressBar";
import PlayerControls from "../../components/player/PlayerControls";
import { currentTrack } from "../../data/playerData";

export default function PlayerScreen() {
    return(
        <Screen>
            <View style={styles.container}>
                <PlayerHeader />

                <AlbumArtwork image={currentTrack.albumArt} />

                <TrackInfo
                    title={currentTrack.title}
                    artist={currentTrack.artist}
                />

                <ProgressBar
                    currentTime={currentTrack.currentTime}
                    duration={currentTrack.duration}
                    progress={currentTrack.progress}
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