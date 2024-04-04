import React from "react";
import { TouchableRipple } from "react-native-paper";

export default function SVGButton({ children, ...props }) {
    return (
        <TouchableRipple
            rippleColor={"#FFFFFF"}
            {...props}
        >
            {children}
        </TouchableRipple>
    );
}