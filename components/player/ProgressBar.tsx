import { View, Text, StyleSheet } from "react-native";

type Props = {
  currentTime: string;
  duration: string;
  progress: number;
};

export default function ProgressBar({
  currentTime,
  duration,
  progress,
}: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.track}>
        <View style={[styles.fill, { width: `${progress * 100}%` }]} />
      </View>

      <View style={styles.timeRow}>
        <Text style={styles.time}>{currentTime}</Text>
        <Text style={styles.time}>{duration}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 28,
  },
  track: {
    height: 5,
    borderRadius: 999,
    backgroundColor: "#262636",
    overflow: "hidden",
    marginBottom: 10,
  },
  fill: {
    height: "100%",
    borderRadius: 999,
    backgroundColor: "#FF4FD8",
  },
  timeRow: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  time: {
    color: "#A1A1B3",
    fontSize: 12,
    fontWeight: "500",
  },
});