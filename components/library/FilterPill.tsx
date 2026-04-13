import { TouchableOpacity, Text, StyleSheet } from "react-native";

type Props = {
  label: string;
  active?: boolean;
  onPress?: () => void;
};

export default function FilterPill({ label, active = false, onPress }: Props) {
  return (
    <TouchableOpacity
      style={[styles.pill, active && styles.activePill]}
      activeOpacity={0.85}
      onPress={onPress}
    >
      <Text style={[styles.text, active && styles.activeText]}>{label}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  pill: {
    paddingHorizontal: 14,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#15151D",
    borderWidth: 1,
    borderColor: "#262636",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  activePill: {
    borderColor: "#FF4FD8",
  },
  text: {
    color: "#C7C7CC",
    fontSize: 13,
    fontWeight: "600",
  },
  activeText: {
    color: "#FFFFFF",
  },
});