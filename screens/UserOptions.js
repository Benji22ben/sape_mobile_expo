import React, { useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function UserOptions() {
  // const [isAuth, setIsAuth] = useContext(AuthContext);

  // Handle logout
  const logout = () => {
    // Clear the token
    AsyncStorage.removeItem("token");
    // Redirect to the login page
  };

  return <div>UserOptions</div>;
}

export default UserOptions;
