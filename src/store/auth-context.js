import { createContext, useState, useEffect } from "react";
import UseLocalStorage from './useLocalStorage.js';

const AuthContext = createContext({
    user: null,
    isLoggedIn: false,
    createUser: () => { },
    loginUser: () => { },
    logoutUser: () => { }
});

export function AuthContextProvider(props) {
    const [userAuth, setUserAuth] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const { getItem } = UseLocalStorage();

    useEffect(() => {
        const user = getItem('user');
        if (user) {
            loginUser(JSON.parse(user));
        }
    }, [getItem]);

    function createUser(user) {
        // create User and Log Them In
        setUserAuth(user);

        setIsLoggedIn(true);
    }

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
        createUser: createUser,
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