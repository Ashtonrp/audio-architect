import { SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

export default function Screen({
    children,
} : {
    children: React.ReactNode;
}) {
    return <SafeAreaView style={styles.container}>{children}</SafeAreaView>
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#05050A"
    },
});