import { View, Text } from "react-native";

export default function PlayerScreen() {
    return (
        <View 
            style={{
                flex: 1,
                backgroundColor: "#0B0B0F",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Text style={{ color: "white", fontSize: 24}}>Player</Text>
        </View>
    );
}