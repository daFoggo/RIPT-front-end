import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(!!Cookies.get("token"));

    const handleLogIn = (userData) => {
        setLoggedIn(true);
        Cookies.set("userData", JSON.stringify(userData));
    }

    const handleLogOut = () => {
        Cookies.remove("userData");
        setLoggedIn(false);
    }

    return (
        <AuthContext.Provider value={{ loggedIn, handleLogIn, handleLogOut }}>
            {children}
        </AuthContext.Provider>
    );
}

AuthContext.propTypes = {
    children: PropTypes.node.isRequired,
}

AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
}