import { useEffect, useState } from "react";

type AuthUser = {
    name: string
    email: string
}

export const UserTypeAssertion = () => {
    const [user, setUser] = useState<AuthUser>({} as AuthUser)

    const handleLogin = () => {
        setUser({
            name: 'Vishwas',
            email: 'vishwas@example.com'
        })
    }

    useEffect(() => {
        console.log(user.name);
    })

    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <div>User name is {user.name}</div>
            <div>User email is {user.email}</div>
        </div>
    )
}
