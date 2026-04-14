import { View, Text, TextInput, StyleSheet } from "react-native";

type Props = {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  placeholder: string;
  secureTextEntry?: boolean;
  error?: string;
};

export default function AuthInput({
  label,
  value,
  onChangeText,
  placeholder,
  secureTextEntry = false,
  error,
}: Props) {
  return (
    <View style={styles.wrapper}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor="#7F7F8C"
        secureTextEntry={secureTextEntry}
        style={[styles.input, error ? styles.inputError : null]}
      />
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 16,
  },
  label: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 8,
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
  inputError: {
    borderColor: "#FF6B81",
  },
  error: {
    color: "#FF6B81",
    fontSize: 12,
    marginTop: 6,
  },
});