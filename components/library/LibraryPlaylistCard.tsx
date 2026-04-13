import { View, Text, Image, StyleSheet } from "react-native";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export default function LibraryPlaylistCard({
  title,
  subtitle,
  image,
}: Props) {
  return (
    <View style={styles.card}>
      <Image source={{ uri: image }} style={styles.image} />
      <View style={styles.textWrap}>
        <Text style={styles.title} numberOfLines={1}>
          {title}
        </Text>
        <Text style={styles.subtitle}>{subtitle}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#101018",
    borderRadius: 18,
    borderWidth: 1,
    borderColor: "#262636",
    padding: 12,
    marginBottom: 14,
  },
  image: {
    width: 58,
    height: 58,
    borderRadius: 14,
    marginRight: 12,
  },
  textWrap: {
    flex: 1,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginBottom: 4,
  },
  subtitle: {
    color: "#A1A1B3",
    fontSize: 13,
    fontWeight: "500",
  },
});