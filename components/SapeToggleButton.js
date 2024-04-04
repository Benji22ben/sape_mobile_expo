import React from "react";
import { TouchableOpacity } from "react-native";
import { Switch, useTheme, Text } from "react-native-paper";

export default function SapeToggleButton({ label }) {
    const [isSape, setIsSape] = React.useState(false);
    const theme = useTheme();

    return (
        <TouchableOpacity
            style={{
                backgroundColor: isSape ? theme.colors.primary : "transparent",
                borderColor: theme.colors.primary,
                borderWidth: 1,
                alignItems: "center",
                justifyContent: "center",
                padding: 8,
            }}
            onPress={() => setIsSape(!isSape)}
        >
            <Switch
                value={isSape}
                style={{
                    opacity: 0,
                    height: 0,
                }}
            />
            <Text>{label}</Text>
        </TouchableOpacity>

    )
}