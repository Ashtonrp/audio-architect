import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  multiline?: boolean;
};

export default function TextField({
  label,
  placeholder,
  value,
  onChangeText,
  multiline = false,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7F7F8C"
        multiline={multiline}
        textAlignVertical={multiline ? "top" : "center"}
        style={[styles.input, multiline && styles.multiline]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 18,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 10,
  },
  input: {
    height: 52,
    borderRadius: 14,
    backgroundColor: "#15151D",
    borderWidth: 1,
    borderColor: "#262636",
    paddingHorizontal: 14,
    color: "#FFFFFF",
    fontSize: 15,
  },
  multiline: {
    height: 110,
    paddingTop: 14,
  },
});