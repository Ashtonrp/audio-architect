import { Image, StyleSheet, View } from "react-native";

type Props = {
  image: string;
};

export default function AlbumArtwork({ image }: Props) {
  return (
    <View style={styles.wrapper}>
      <Image source={{ uri: image }} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    alignItems: "center",
    marginBottom: 30,
  },
  image: {
    width: 290,
    height: 290,
    borderRadius: 26,
    backgroundColor: "#15151D",
  },
});