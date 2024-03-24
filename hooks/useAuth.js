import AsyncStorage from "@react-native-async-storage/async-storage";
import { LOGIN, REFRESH } from "../constants";

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
      await AsyncStorage.setItem("refresh", data.refresh);
    } else {
      throw new Error(data.message);
    }

    return await response;
  }

  async function refresh() {
    const token = await AsyncStorage.getItem("refresh");
    const response = await fetch(REFRESH, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ refresh: token }),
    });

    const data = await response.json();

    if (response.ok && data.access) {
      await AsyncStorage.setItem("token", data.access);
    } else {
      throw new Error(data.message);
    }
    console.log(data);
    return await data;
  }

  async function checkAuthent() {
    const token = await AsyncStorage.getItem("token");
    if (token) {
      const new_token = await refresh();
      if (new_token) {
        await AsyncStorage.setItem("token", new_token.access);
        return true;
      }
    }
    return false;
  }

  return { login, checkAuthent };
}
