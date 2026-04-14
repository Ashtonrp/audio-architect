import { View, Text, StyleSheet } from "react-native";

type Props = {
  isLogin: boolean;
};

export default function AuthHeader({ isLogin }: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.title}>
        {isLogin ? "Welcome Back" : "Create Account"}
      </Text>
      <Text style={styles.subtitle}>
        {isLogin
          ? "Log in to continue listening."
          : "Set up your Audio Architect account."}
      </Text>
      <View style={styles.underline} />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 28,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 30,
    fontWeight: "700",
    marginBottom: 8,
  },
  subtitle: {
    color: "#A1A1B3",
    fontSize: 15,
    lineHeight: 22,
  },
  underline: {
    marginTop: 10,
    width: 72,
    height: 2,
    backgroundColor: "#FF4FD8",
    borderRadius: 999,
  },
});