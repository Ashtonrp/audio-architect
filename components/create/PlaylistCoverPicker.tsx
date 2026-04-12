import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress?: () => void;
};

export default function PlaylistCoverPicker({ onPress }: Props) {
  return (
    <TouchableOpacity style={styles.container} activeOpacity={0.85} onPress={onPress}>
      <View style={styles.inner}>
        <Ionicons name="image-outline" size={34} color="#FFFFFF" />
        <Text style={styles.title}>Add Cover</Text>
        <Text style={styles.subtitle}>Choose artwork for your playlist</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 22,
    borderWidth: 1,
    borderColor: "#B100FF",
    backgroundColor: "#101018",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 22,
  },
  inner: {
    alignItems: "center",
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
    marginTop: 12,
    marginBottom: 6,
  },
  subtitle: {
    color: "#A1A1B3",
    fontSize: 13,
  },
});