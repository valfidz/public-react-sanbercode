import { Navbar } from "../../components/nav/nav";
import { Footer } from "../../components/footer/footer";
import { LoginForm } from "../../components/formInput/loginForm";

export const Login = () => {
    return (
        <>
            <Navbar />
            <LoginForm />
            <Footer />
        </>
    )
}