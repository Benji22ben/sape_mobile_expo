import React from 'react';
import { TouchableOpacity, Dimensions } from 'react-native';
import { useTheme } from 'react-native-paper';

function FormSelectable({ children, spaceBetween = false, style = {}, ...props }) {
    const theme = useTheme();
    const width = Dimensions.get("window").width;

    return (
        <TouchableOpacity
            style={{
                backgroundColor: theme.colors.quaternary,
                width: width,
                paddingVertical: 16,
                paddingHorizontal: 16,
                alignItems: "center",
                flexDirection: "row",
                gap: 8,
                justifyContent: spaceBetween ? "space-between" : "center",
                ...style,
            }}
            {...props}
        >
            {children}
        </TouchableOpacity>
    )
}

export default FormSelectable;