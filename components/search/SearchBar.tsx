import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";

type Props = {
    value : string;
    onChangeText: (text: string) => void;
};

export default function SearchBar({ value, onChangeText }: Props) {
    return(
        <View style={styles.container}>
            <Feather name="search" size={20} color="#A1A1B3" />
            <TextInput 
                value={value}
                onChangeText={onChangeText}
                placeholder="Artists, songs, albums..."
                placeholderTextColor="#A1A1B3"
                style={styles.input}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 52,
        borderRadius: 14,
        backgroundColor: "#15151D",
        borderWidth: 1,
        borderColor: "#262636",
        paddingHorizontal: 14,
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 24,
    },
    input: {
        flex: 1,
        color: "#FFFFFF",
        marginLeft: 10,
        fontSize: 15,
    },
})