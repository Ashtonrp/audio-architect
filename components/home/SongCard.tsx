import { Image, Text, View, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  artist: string;
  image: string;
};

export default function SongCard({ title, artist, image }: Props) {
  return (
    <View style={styles.card}>
      <View style={styles.imageWrap}>
        <Image source={{ uri: image }} style={styles.image} />
        <Ionicons
          name="heart-outline"
          size={16}
          color="#FFFFFF"
          style={styles.heart}
        />
      </View>
      <Text style={styles.title} numberOfLines={1}>
        {title}
      </Text>
      <Text style={styles.artist} numberOfLines={1}>
        {artist}
      </Text>
    </View>
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