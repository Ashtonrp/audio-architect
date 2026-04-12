import { View, Text, StyleSheet } from "react-native";

export default function CreateHeader() {
    return(
        <View style={styles.wrapper}>
            <Text style={styles.title}>Create Playlist</Text>
            <View style={styles.underline} />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        marginBottom: 24,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "700",
    },
    underline: {
        marginTop: 6,
        width: 94,
        height: 2,
        backgroundColor: "#FF4FD8",
        borderRadius: 999,
    },
});