import { useState } from "react"
import { AuthContext } from "../context/context";

export const AuthProvider = ({children, authState}) => {
    const [userInfo, setUserInfo] = useState(authState.user);
    const [tokenValid, setTokenValid] = useState(authState.validToken);

    return (
        <AuthContext.Provider value={{userInfo, setUserInfo, tokenValid, setTokenValid}}>
            {children}
        </AuthContext.Provider>
    )
}