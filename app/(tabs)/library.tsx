import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import Screen from "../../components/ui/Screen";
import SectionHeader from "../../components/ui/SectionHeader";
import LibraryHeader from "../../components/library/LibraryHeader";
import FilterPill from "../../components/library/FilterPill";
import LibraryPlaylistCard from "../../components/library/LibraryPlaylistCard";
import LibrarySongRow from "../../components/library/LibrarySongRow";
import { libraryFilters, savedAlbums, savedSongs } from "../../data/libraryData";
import { useLibrary } from "../../context/LibraryContext";
import { useMusic } from "../../context/MusicContext";

export default function LibraryScreen() {
  // Controls active filter tab
  const [activeFilter, setActiveFilter] = useState("Playlists");
  const router = useRouter();

  const { playlists } = useLibrary();
  // Gets music data from the music context
  const { albums, likedSongs, toggleLikedSong, setCurrentSong } = useMusic();

  return (
    <Screen>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.content}>
        <LibraryHeader />

        <View style={styles.filters}>
          {libraryFilters.map((filter) => (
            <FilterPill
              key={filter}
              label={filter}
              active={activeFilter === filter}
              onPress={() => setActiveFilter(filter)}
            />
          ))}
        </View>

        {activeFilter === "Playlists" && (
          <View style={styles.section}>
            <SectionHeader title="Saved Playlists" />
            {playlists.map((playlist) => (
              <LibraryPlaylistCard
                key={playlist.id}
                title={playlist.title}
                subtitle={playlist.subtitle}
                image={playlist.image}
              />
            ))}
          </View>
        )}

        {activeFilter === "Albums" && (
          <View style={styles.section}>
            <SectionHeader title="Saved Albums" />
            {savedAlbums.map((album) => (
              <LibraryPlaylistCard
                key={album.id}
                title={album.title}
                subtitle={album.subtitle}
                image={album.image}
              />
            ))}
          </View>
        )}

        {activeFilter === "Songs" && (
          <View style={styles.section}>
            <SectionHeader title="Saved Songs" />
            {likedSongs.map((song) => (
              <LibrarySongRow
                key={song.id}
                title={song.title}
                artist={song.artist}
                image={song.image}
                isLiked={true}
                onPress={() => {
                  setCurrentSong(song);
                  router.push("/(tabs)/player");
                }}
                onToggleHeart={() => toggleLikedSong(song.id)}
              />
            ))}
          </View>
        )}
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
  filters: {
    flexDirection: "row",
    marginBottom: 24,
  },
  section: {
    marginBottom: 18,
  },
});