import { useContext } from "react"
import { UserContext } from "./UserContext"

export const User = () => {
    const userContext = useContext(UserContext)

    const handleLogin = () => {
        if (userContext) {
            userContext.setUser({
                name: "Jalaj",
                email: "jalaj@gmail.com"
            })
        }
    }
    const handleLogout = () => {
        userContext?.setUser(null);
    }

    return (
        <div>
            UseContext Future Value
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User Name is {userContext?.user?.name}</div>
            <div>User Email is {userContext?.user?.email}</div>
            UseContext Future Value
        </div>
    )
}