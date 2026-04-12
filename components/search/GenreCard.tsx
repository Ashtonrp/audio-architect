import { ImageBackground, Text, StyleSheet, View } from "react-native";

type Props = {
  title: string;
  image: string;
};

export default function GenreCard({ title, image }: Props) {
  return (
    <ImageBackground
      source={{ uri: image }}
      imageStyle={styles.image}
      style={styles.card}
    >
      <View style={styles.overlay} />
      <Text style={styles.title}>{title}</Text>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  card: {
    width: "48%",
    height: 110,
    marginBottom: 14,
    justifyContent: "flex-end",
    padding: 12,
    overflow: "hidden",
    borderRadius: 16,
    backgroundColor: "#1C1C27",
  },
  image: {
    borderRadius: 16,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.28)",
    borderRadius: 16,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
  },
});