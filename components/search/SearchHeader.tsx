import { View, Text, StyleSheet } from "react-native";

export default function SearchHeader() {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>Search</Text>
      <View style={styles.underline} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
  },
  underline: {
    marginTop: 6,
    width: 58,
    height: 2,
    backgroundColor: "#FF4FD8",
    borderRadius: 999,
  },
});