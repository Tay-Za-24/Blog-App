import AsyncStorage from "@react-native-async-storage/async-storage"
import { useEffect } from "react"
import { useState } from "react"

export default () => {
    const [user, setUser] = useState(null)
    const [validToken, setValidToken] = useState(false)
    const [authStateReady, setAuthStateReady] = useState(false)

    useEffect(() => {
        isLoggedin() 
    }, [])

    const isLoggedin = async () => {
        AsyncStorage.getItem('userInfo').then (async (response) => {
            const userInfo = JSON.parse(response)
            console.log(userInfo);
            userInfo && setUser(userInfo)
            userInfo && setValidToken(true)
            userInfo && setAuthStateReady(true)
        })
    }
    return {user, setUser, validToken, ready: authStateReady}
}
