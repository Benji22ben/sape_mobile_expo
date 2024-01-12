import React from "react";
import { Button as PaperButton, useTheme } from "react-native-paper";

function Button({ children, ...props }) {
  const theme = useTheme();

  return (
    <PaperButton
      {...props}
      style={{
        backgroundColor: theme.colors.primary,
        borderRadius: 0,
        ...props.style,
      }}
      rippleColor={theme.colors.onPrimary}
      textColor={theme.colors.secondary}
    >
      {children}
    </PaperButton>
  );
}

export default Button;
