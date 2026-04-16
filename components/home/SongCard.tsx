import { Image, Text, View, StyleSheet, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  artist: string;
  image: string;
  onPress?: () => void;
};

export default function SongCard({ title, artist, image, onPress }: Props) {
  return (
    <Pressable onPress={onPress} style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: image }} style={styles.image} />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.artist} numberOfLines={1}>
        {artist}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 92,
  },
  imageWrap: {
    position: "relative",
    marginBottom: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 12,
  },
  heart: {
    position: "absolute",
    right: 6,
    bottom: 6,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
  },
  artist: {
    color: "#8E8E9A",
    fontSize: 10,
    marginTop: 2,
  },
});