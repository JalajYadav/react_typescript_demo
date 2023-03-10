import { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

export const Box = () => {
    const theme = useContext(ThemeContext)
    return (
        <div>
            Theme Context {theme.primary.main}
        </div>
    )
}
