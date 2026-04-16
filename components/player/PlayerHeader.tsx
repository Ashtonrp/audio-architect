import { View, Text, StyleSheet } from "react-native";

export default function PlayerHeader() {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>Now Playing</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    marginBottom: 24,
  },
  label: {
    color: "#A1A1B3",
    fontSize: 12,
    fontWeight: "600",
    letterSpacing: 1,
  },
});