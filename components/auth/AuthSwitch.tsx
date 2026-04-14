import { View, TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  isLogin: boolean;
  onToggle: () => void;
};

export default function AuthSwitch({ isLogin, onToggle }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        {isLogin ? "Need an account?" : "Already have an account?"}
      </Text>
      <TouchableOpacity onPress={onToggle} activeOpacity={0.8}>
        <Text style={styles.link}>
          {isLogin ? " Create one" : " Log in"}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  text: {
    color: "#A1A1B3",
    fontSize: 14,
  },
  link: {
    color: "#FF4FD8",
    fontSize: 14,
    fontWeight: "700",
  },
});