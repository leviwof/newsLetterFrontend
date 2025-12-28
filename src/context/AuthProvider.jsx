import React, { Children, createContext, useState } from 'react'

export const AuthContext = createContext();

const AuthProvider = () => {
    const [user, setUser] = useState(null)

    const login = (email) => {
        setUser({ email })
    }
    return (
        <AuthContext.Provider value={{ user, login }}>
            {Children}
        </AuthContext.Provider>
    )
}

export default AuthProvider
