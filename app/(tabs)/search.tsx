import { useMemo, useState } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import Screen from "../../components/ui/Screen";
import SectionHeader from "../../components/ui/SectionHeader";
import SearchHeader from "../../components/search/SearchHeader";
import SearchBar from "../../components/search/SearchBar";
import GenreCard from "../../components/search/GenreCard";
import { genres } from "../../data/searchData";

export default function SearchScreen() {
  const [query, setQuery] = useState("");

  const filteredGenres = useMemo(() => {
    const trimmed = query.trim().toLowerCase();

    if (!trimmed) return genres;

    return genres.filter((genre) => 
      genre.title.toLowerCase().includes(trimmed)
    );
  }, [query]);

  return(
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <SearchHeader />
        <SearchBar value={query} onChangeText={setQuery} />

        <SectionHeader title="Browse All" />

        <View style={styles.grid}>
          {filteredGenres.map((genre) => (
            <GenreCard 
              key={genre.id}
              title={genre.title}
              image={genre.image}
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
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
});