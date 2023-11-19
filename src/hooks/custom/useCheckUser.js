import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"
import { useState } from "react"
import authService from "../../services/authServices"

export default () => {
    const [user, setUser] = useState(null)
    const [validToken, setValidToken] = useState(false)
    const [authStateReady, setAuthStateReady] = useState(false)

    useEffect(() => {
        isLoggedin() 
    }, [authStateReady])

    const isLoggedin = async () => {
        const userInfo = await AsyncStorage.getItem('userInfo').then((res) => JSON.parse(res));
        if (userInfo) {
          return checkAuthTokenValid(userInfo);
        } else {
          updateAppState({}, false)
        }
      };
      const checkAuthTokenValid = async (userInfo) => {
        try {
            const response = await authService.checkUserTokenValid(userInfo.access_token);
            updateAppState(userInfo, true)
        } catch (error) {
          updateAppState({}, false)
        }
    }
    const updateAppState = (userInfo, isTokenValid) => {
      setUser(userInfo)
      setValidToken( isTokenValid)
      setAuthStateReady(true)
    }
    return {user, setUser, validToken, ready: authStateReady}
}

