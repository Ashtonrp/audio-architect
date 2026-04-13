import { useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Screen from "../../components/ui/Screen";
import SectionHeader from "../../components/ui/SectionHeader";
import LibraryHeader from "../../components/library/LibraryHeader";
import FilterPill from "../../components/library/FilterPill";
import LibraryPlaylistCard from "../../components/library/LibraryPlaylistCard";
import LibrarySongRow from "../../components/library/LibrarySongRow";
import {
  libraryFilters,
  savedPlaylists,
  savedSongs,
} from "../../data/libraryData";

export default function LibraryScreen() {
  const [activeFilter, setActiveFilter] = useState("Playlists");

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
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

        <SectionHeader title="Saved Playlists" />
        <View style={styles.section}>
          {savedPlaylists.map((playlist) => (
            <LibraryPlaylistCard
              key={playlist.id}
              title={playlist.title}
              subtitle={playlist.subtitle}
              image={playlist.image}
            />
          ))}
        </View>

        <SectionHeader title="Liked Songs" />
        <View>
          {savedSongs.map((song) => (
            <LibrarySongRow
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
  filters: {
    flexDirection: "row",
    marginBottom: 24,
  },
  section: {
    marginBottom: 18,
  },
});