import { useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import Screen from "../../components/ui/Screen";
import CreateHeader from "../../components/create/CreateHeader";
import PlaylistCoverPicker from "../../components/create/PlaylistCoverPicker";
import TextField from "../../components/create/TextField";
import PrimaryButton from "../../components/create/PrimaryButton";
import { useLibrary } from "../../context/LibraryContext";

export default function CreateScreen() {
  const router = useRouter();
  const { addPlaylist } = useLibrary();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePlaylist = () => {
    const trimmedTitle = title.trim();

    if (!trimmedTitle) {
      Alert.alert("Missing name", "Please enter a playlist name.");
      return;
    }

    addPlaylist(trimmedTitle);

    Alert.alert("Playlist Created", `Created "${trimmedTitle}"`, [
      {
        text: "OK",
        onPress: () => router.push("/(tabs)/library"),
      },
    ]);

    setTitle("");
    setDescription("");
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <CreateHeader />

        <PlaylistCoverPicker
          onPress={() =>
            Alert.alert("Cover Picker", "Image picker can be added later.")
          }
        />

        <TextField
          label="Playlist Name"
          placeholder="Enter playlist name"
          value={title}
          onChangeText={setTitle}
        />

        <TextField
          label="Description"
          placeholder="Describe the vibe of your playlist"
          value={description}
          onChangeText={setDescription}
          multiline
        />

        <PrimaryButton label="Create Playlist" onPress={handleCreatePlaylist} />
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
});