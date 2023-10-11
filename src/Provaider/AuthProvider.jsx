import React, { createContext, useEffect, useState } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // console.log(user);

    // const logOut = () => {
    //     setUser(null)
    // }

    const isAuthenticated = !!user;

    const authInfo = {
        user,
        // logOut,
        setUser,
        loading,
        isAuthenticated
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;