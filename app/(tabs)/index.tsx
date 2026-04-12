import { ScrollView, StyleSheet, Text, View } from "react-native";
import Screen from "../../components/ui/Screen";
import Header from "../../components/home/Header";
import SectionHeader from "../../components/ui/SectionHeader";
import AlbumCard from "../../components/home/AlbumCard";
import PlaylistRow from "../../components/home/PlaylistRow";
import SongCard from "../../components/home/SongCard";
import {
  recentAlbums,
  recentPlaylists,
  recentlyLiked,
} from "../../data/HomeData"

export default function HomeScreen() {
  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <Header />

        <Text style={styles.subtitle}>
          Welcome to AudioArchitect @user,{"\n"}
          Lets take a look at your recent{"\n"}
          activity
        </Text>

        <View style={styles.divider} />

        <SectionHeader title="Recent Albums" actionLabel="Albums" />
        <View style={styles.row}>
          {recentAlbums.map((album) => (
            <AlbumCard
              key={album.id}
              title={album.title}
              artist={album.artist}
              image={album.image}
            />
          ))}
        </View>

        <SectionHeader title="Recent Playlists" actionLabel="Playlists" />
        <View style={styles.playlists}>
          {recentPlaylists.map((playlist) => (
            <PlaylistRow key={playlist.id} title={playlist.title} />
          ))}
        </View>

        <SectionHeader title="Recently Liked" actionLabel="Songs" />
        <View style={styles.row}>
          {recentlyLiked.map((song) => (
            <SongCard
              key={song.id}
              title={song.title}
              artist={song.artist}
              image={song.image}
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