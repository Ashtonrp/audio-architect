import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  onPress: () => void;
  disabled?: boolean;
};

export default function AuthButton({
  label,
  onPress,
  disabled = false,
}: Props) {
  return (
    <TouchableOpacity
      style={[styles.button, disabled ? styles.disabled : null]}
      onPress={onPress}
      activeOpacity={0.85}
      disabled={disabled}
    >
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
    marginTop: 8,
  },
  disabled: {
    opacity: 0.55,
  },
  text: {
    color: "#05050A",
    fontSize: 16,
    fontWeight: "700",
  },
});