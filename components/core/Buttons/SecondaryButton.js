import React from "react";
import { Button as PaperButton, useTheme } from "react-native-paper";

function SecondaryButton({ children, ...props }) {
  const theme = useTheme();

  return (
    <PaperButton
      {...props}
      style={{
        backgroundColor: theme.colors.secondary,
        borderRadius: 0,
      }}
    >
      {children}
    </PaperButton>
  );
}

export default SecondaryButton;
