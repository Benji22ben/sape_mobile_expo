import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

// @ts-ignore
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);

  const checkAuth = async () => {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      setIsAuth(true);
    }
  };

  const logout = async () => {
    await AsyncStorage.removeItem("token");
    setIsAuth(false);

    return true;
  };

  return (
    <AuthContext.Provider value={{ isAuth, logout, checkAuth }}>
      {children}
    </AuthContext.Provider>
  );
}

export { AuthContext, AuthProvider };
