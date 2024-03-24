import React, { useContext } from "react";
import PrimaryButton from "../components/core/Buttons/PrimaryButton";
import Box from "../components/core/Box";
import { AuthContext } from "../context/AuthContext";

function UserOptions() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Box style={{ justifyContent: "center" }}>
      <PrimaryButton onPress={() => handleLogout()}>
        Se déconnecter
      </PrimaryButton>
    </Box>
  );
}

export default UserOptions;
