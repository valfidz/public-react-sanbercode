import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

export const LoginRoute = (props) => {
    if (Cookies.get('token') !== undefined) {
        return <Navigate to={'/'} />
    } else if (Cookies.get('token') === undefined) {
        return props.children
    }
}