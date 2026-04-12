import { View, Text, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeHeader() {
    return (
        <View style={styles.wrapper}>
            <View>
                <Text style={styles.title}>Home</Text>
                <View style={styles.underline} />
            </View>

            <Ionicons name="person-circle-outline" size={30} color="#FFFFFF" />
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "flex-start",
        marginBottom: 18,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 30,
        fontWeight: "700",
    },
    underline: {
        marginTop: 6,
        width: 46,
        height: 2,
        backgroundColor: "#FF4FD8",
        borderRadius: 999,
    },
});