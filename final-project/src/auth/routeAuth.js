import { Navigate } from "react-router-dom"
import Cookies from "js-cookie"

export const RouteAuth = (props) => {
    if (Cookies.get('token') !== undefined) {
        return props.children
    } else if (Cookies.get('token') === undefined) {
        return <Navigate to="/" />
    }
}