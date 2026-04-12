import { Image, Text, View, StyleSheet } from "react-native";

type Props = {
    title: string;
    artist: string;
    image: string;
};

export default function AlbumCard({ title, artist, image }: Props) {
    return(
        <View style={styles.card}>
            <Image source={{ uri: image }} style={styles.image} />
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
    image: {
        width: 80,
        height: 80,
        borderRadius: 12,
        marginBottom: 8,
    },
    title: {
        color:"#FFFFFF",
        fontSize: 11,
        fontWeight: "700",
    },
    artist: {
        color: "#8E8E9A",
        fontSize: 10,
        marginTop: 2,
    },
});