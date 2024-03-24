import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN } from "../constants";

export function useAuth() {
  async function login(email, password) {
    const response = await fetch(LOGIN, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: email, password: password }),
    });

    const data = await response.json();

    if (response.ok && data.access) {
      await AsyncStorage.setItem("token", data.access);
    } else {
      throw new Error(data.message);
    }

    return await response;
  }

  async function checkAuth() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      return true;
    }
    return false;
  }

  return { login };
}
