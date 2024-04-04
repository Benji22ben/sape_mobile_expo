import React from "react";
import { Button as PaperButton, useTheme } from "react-native-paper";

function Button({ children, textColor = "", ...props }) {
  const theme = useTheme();
  if (textColor == "") {
    textColor = theme.colors.secondary;
  }

  return (
    <PaperButton
      {...props}
      style={{
        backgroundColor: theme.colors.primary,
        borderRadius: 0,
        ...props.style,
      }}
      rippleColor={theme.colors.onPrimary}
      textColor={textColor}
    >
      {children}
    </PaperButton>
  );
}

export default Button;
