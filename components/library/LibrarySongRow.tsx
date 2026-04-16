import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  title: string;
  artist: string;
  image: string;
  isLiked: boolean;
  onToggleHeart: () => void;
};

export default function LibrarySongRow({ title, artist, image, isLiked, onToggleHeart }: Props) {
  return (
    <View style={styles.row}>
      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.textWrap}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.artist} numberOfLines={1}>
          {artist}
        </Text>
      </View>

      <TouchableOpacity onPress={onToggleHeart} hitSlop={10}>
        <Ionicons name={isLiked ? "heart" : "heart-outline"} 
        size={18} 
        color="#FF4FD8" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#1A1A24",
  },
  image: {
    width: 52,
    height: 52,
    borderRadius: 12,
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
    marginBottom: 3,
  },
  artist: {
    color: "#A1A1B3",
    fontSize: 13,
  },
});