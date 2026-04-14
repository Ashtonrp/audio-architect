import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function HomeHeader() {
  const router = useRouter();

  return (
    <View style={styles.wrapper}>
      <View>
        <Text style={styles.title}>Home</Text>
        <View style={styles.underline} />
      </View>

      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => router.push("/auth")}
      >
        <Ionicons name="person-circle-outline" size={30} color="#FFFFFF" />
      </TouchableOpacity>
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