import { useState } from "react";
import { Alert, ScrollView, StyleSheet } from "react-native";
import Screen from "../../components/ui/Screen";
import CreateHeader from "../../components/create/CreateHeader";
import PlaylistCoverPicker from "../../components/create/PlaylistCoverPicker";
import TextField from "../../components/create/TextField";
import PrimaryButton from "../../components/create/PrimaryButton";

export default function CreateScreen() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleCreatePlaylist = () => {
    Alert.alert("Playlist Created", `Created "${title || "Untitled Playlist"}"`);
  };

  return (
    <Screen>
      <ScrollView contentContainerStyle={styles.content}>
        <CreateHeader />

        <PlaylistCoverPicker onPress={() => Alert.alert("Cover Picker", "Image picker can be added later.")} />

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