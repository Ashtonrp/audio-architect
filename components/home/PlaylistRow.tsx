import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

type Props = {
    title: string;
};

export default function PlaylistRow({ title }: Props) {
    return(
        <View style={styles.row}>
            <Text style={styles.text}>{title}</Text>
            <Ionicons name="play-outline" size={18} color="#FFFFFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        borderWidth: 1,
        borderColor: "#B100FF",
        borderRadius: 12,
        paddingHorizontal: 18,
        height: 52,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 14,
        backgroundColor: "#05050A"
    },
    text: {
        color: "#FFFFFF",
        fontSize: 15,
        fontWeight: "600",
    },
});