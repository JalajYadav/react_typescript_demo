import { createContext, ReactNode, useState } from "react";

export type AuthUser = {
    name: string,
    email: string,
}

type UserContextProviderProp = {
    children: ReactNode;
}

type UserContextType = {
    user: AuthUser | null,
    setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>
}

export const UserContext = createContext<null | UserContextType>(null);

export const UserContextProvider = ({ children }: UserContextProviderProp) => {
    const [user, setUser] = useState<null | AuthUser>(null);

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}
