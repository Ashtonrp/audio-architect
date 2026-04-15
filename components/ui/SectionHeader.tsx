import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

type Props = {
  title: string;
  actionLabel?: string;
  onActionPress?: () => void;
};

export default function SectionHeader({
  title,
  actionLabel,
  onActionPress,
}: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      {actionLabel ? (
        <TouchableOpacity onPress={onActionPress} activeOpacity={0.8}>
          <Text style={styles.action}>{actionLabel}</Text>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "700",
  },
  action: {
    color: "#FF4FD8",
    fontSize: 14,
    fontWeight: "600",
  },
});