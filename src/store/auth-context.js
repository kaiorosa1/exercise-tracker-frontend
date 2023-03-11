import { createContext, useState } from "react";


const AuthContext = createContext({
    user: null,
    isLoggedIn: false,
    loginUser: () => {},
    logoutUser: () => {}
});

export function AuthContextProvider(props) {
    const [userAuth, setUserAuth] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    function loginUser(user) {
        // communicate here with backend (?)
        setUserAuth(user);
        setIsLoggedIn(true);
    };

    function logoutUser() {
        setUserAuth(null);
        setIsLoggedIn(false);
    };

   
    const context = {
        user: userAuth,
        isLoggedIn: isLoggedIn,
        loginUser: loginUser,
        logoutUser: logoutUser
    };
    return (
        <AuthContext.Provider value={context}>
            {props.children}
        </AuthContext.Provider>
    );
}

export default AuthContext;