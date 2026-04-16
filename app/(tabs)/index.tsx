import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/ui/Screen";
import Header from "../../components/home/Header";
import SectionHeader from "../../components/ui/SectionHeader";
import AlbumCard from "../../components/home/AlbumCard";
import PlaylistRow from "../../components/home/PlaylistRow";
import SongCard from "../../components/home/SongCard";
import { useRouter } from "expo-router";
import { useMusic } from "../../context/MusicContext";

export default function HomeScreen() {
  const router = useRouter();
  // Gets music data from music context
  const { albums, playlists, likedSongs, setCurrentSong } = useMusic();

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <Header />

        <Text style={styles.subtitle}>
          Welcome to AudioArchitect,{"\n"}
          Lets take a look at your recent{"\n"}
          activity
        </Text>

        <View style={styles.divider} />

        <SectionHeader
          title="Recent Albums"
          actionLabel="View Albums"
          // goes to library to show albums
          onActionPress={() =>
            router.push({
              pathname: "/(tabs)/library",
              params: { filter: "Albums" },
            })
          }
        />
        <View style={styles.row}>
          {/* shows set amount of albums - three in this case */}
          {albums.slice(0,3).map((album) => (
            <AlbumCard
              key={album.id}
              title={album.title}
              artist={album.artist}
              image={album.image}
            />
          ))}
        </View>

        <SectionHeader
          title="Recent Playlists"
          actionLabel="View Playlists"
          // goes to library to show playlists
          onActionPress={() =>
            router.push({
              pathname: "/(tabs)/library",
              params: { filter: "Playlists" },
            })
          }
        />
        <View style={styles.playlists}>
          {/* shows set amount of playlists */}
          {playlists.slice(0,2).map((playlist) => (
            <PlaylistRow key={playlist.id} title={playlist.title} />
          ))}
        </View>

        <SectionHeader
          title="Recently Liked"
          actionLabel="View Songs"
          onActionPress={() =>
            router.push({
              pathname: "/(tabs)/library",
              params: { filter: "Songs" },
            })
          }
        />
        <View style={styles.row}>
          {/* shows set amount of songs */}
          {likedSongs.slice(0,3).map((song) => (
            <SongCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              image={song.image}
              // goes to library to show songs
              onPress={() => {
                setCurrentSong(song);
                router.push("/(tabs)/player");
              }}
            />
          ))}
        </View>
      </ScrollView>
    </Screen>
  );
}

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: 24,
    paddingTop: 20,
    paddingBottom: 140,
  },
  subtitle: {
    color: "#C7C7CC",
    fontSize: 16,
    lineHeight: 22,
    fontWeight: "500",
    marginBottom: 16,
  },
  divider: {
    height: 1,
    backgroundColor: "#FF4FD8",
    marginBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 22,
  },
  playlists: {
    marginBottom: 18,
  },
});