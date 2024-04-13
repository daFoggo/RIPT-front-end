import { createContext, useContext, useState } from "react";
import Cookies from "js-cookie";
import PropTypes from "prop-types";

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}

export const AuthProvider = ({ children }) => {
    const [loggedIn, setLoggedIn] = useState(false);

    const handleLogIn = (session_id) => {
        Cookies.set("session_id", session_id);
        setLoggedIn(true);
    }

    const handleLogOut = () => {
        Cookies.remove("session_id");
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