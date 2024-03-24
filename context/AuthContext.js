import React, { createContext, useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAuth } from "../hooks/useAuth";
// @ts-ignore
const AuthContext = createContext();

function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(false);
  const { checkAuthent } = useAuth();

  const checkAuth = async () => {
    setIsAuth(await checkAuthent());
    console.log(isAuth);
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
