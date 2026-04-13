import { Text, TouchableOpacity, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress?: () => void;
};

export default function PrimaryButton({ label, onPress }: Props) {
  return (
    <TouchableOpacity style={styles.button} activeOpacity={0.85} onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 54,
    borderRadius: 16,
    backgroundColor: "#FF4FD8",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 6,
  },
  text: {
    color: "#05050A",
    fontSize: 16,
    fontWeight: "700",
  },
});