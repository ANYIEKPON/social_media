import { createContext, useEffect, useState } from "react";
import image1 from "../assets/image1.jpg"

export const AuthContext = createContext();

export const AuthUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("user")) || null);

const login = () => {
    setCurrentUser({
        id: 1,
        name: "King Doe",
        profilePic: image1
    })
}

    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(currentUser));
    }, [currentUser])

    return (
        <AuthContext.Provider value={{currentUser, login}}>{children}</AuthContext.Provider>
    )
}