import { useState } from "react";
import { UserContext } from "./UserContext";

export const UserProvider = ({ children }) => {

    // const user = {
    //     id: 123,
    //     name: 'Vadick Palomino',
    //     age: 34
    // }

    const [user, setUser] = useState()
    return (
        <UserContext.Provider value={{ setUser, user }}>
            {children}
        </UserContext.Provider>
    )
}
