import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";
import { useRouter } from "expo-router";
import Screen from "../../components/ui/Screen";
import SectionHeader from "../../components/ui/SectionHeader";
import SearchHeader from "../../components/search/SearchHeader";
import SearchBar from "../../components/search/SearchBar";
import GenreCard from "../../components/search/GenreCard";
import LibrarySongRow from "../../components/library/LibrarySongRow";
import AlbumCard from "../../components/home/AlbumCard";
import { useMusic } from "../../context/MusicContext";

export default function SearchScreen() {
  const router = useRouter();
  // Access to the music context for music data
  const { songs, albums, isSongLiked, toggleLikedSong, setCurrentSong } =
    useMusic();

  const [query, setQuery] = useState("");
  const trimmedQuery = query.trim().toLowerCase();

  // Filters based on the search 
  const filteredSongs = useMemo(() => {
    if (!trimmedQuery) return [];

    return songs.filter(
      (song) =>
        song.title.toLowerCase().includes(trimmedQuery) ||
        song.artist.toLowerCase().includes(trimmedQuery)
    );
  }, [trimmedQuery, songs]);

  const filteredAlbums = useMemo(() => {
    if (!trimmedQuery) return [];

    return albums.filter(
      (album) =>
        album.title.toLowerCase().includes(trimmedQuery) ||
        album.artist.toLowerCase().includes(trimmedQuery)
    );
  }, [trimmedQuery, albums]);

  // Shows default view if no search
  const showSearchResults = trimmedQuery.length > 0;

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <SearchHeader />
        <SearchBar value={query} onChangeText={setQuery} />

        {/* shows default browse seciton if no search results*/}
        {!showSearchResults ? (
          <>
            <SectionHeader title="Browse All" />
          </>
        ) : (
          <>
            <View style={styles.section}>
              <SectionHeader title="Songs" />
              {filteredSongs.length > 0 ? (
                filteredSongs.map((song) => (
                  <LibrarySongRow
                    key={song.id}
                    title={song.title}
                    artist={song.artist}
                    image={song.image}
                    isLiked={isSongLiked(song.id)}
                    onPress={() => {
                      setCurrentSong(song);
                      router.push("/(tabs)/player");
                    }}
                    onToggleHeart={() => toggleLikedSong(song.id)}
                  />
                ))
              ) : (
                <Text style={styles.emptyText}>No matching songs found</Text>
              )}
            </View>

            <View style={styles.section}>
              <SectionHeader title="Albums" />
              {filteredAlbums.length > 0 ? (
                <View style={styles.grid}>
                  {filteredAlbums.map((album) => (
                    <AlbumCard
                      key={album.id}
                      title={album.title}
                      artist={album.artist}
                      image={album.image}
                    />
                  ))}
                </View>
              ) : (
                <Text style={styles.emptyText}>No matching albums found</Text>
              )}
            </View>
          </>
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
  section: {
    marginBottom: 24,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  emptyText: {
    color: "#A1A1B3",
    fontSize: 14,
    marginTop: 8,
  },
});