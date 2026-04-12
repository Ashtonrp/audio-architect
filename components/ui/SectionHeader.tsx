import { View, Text, StyleSheet } from "react-native";

type props = {
    title: string;
    actionLabel?: string;
};

export default function SectionHeader({ title, actionLabel }: props) {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {actionLabel ? <Text style={styles.action}>{actionLabel}</Text> : null}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 14,
    },
    title: {
        color: "#FFFFFF",
        fontSize: 16,
        fontWeight: "700",
    },
    action: {
        color: "#FF4FD8",
        fontSize: 12,
        fontWeight: "600",
    },
});