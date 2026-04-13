import { View, Text, StyleSheet } from "react-native";

export default function LibraryHeader() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Your Library</Text>
      <View style={styles.underline} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 20,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },
  underline: {
    marginTop: 6,
    width: 88,
    height: 2,
    backgroundColor: "#FF4FD8",
    borderRadius: 999,
  },
});