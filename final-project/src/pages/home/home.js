import { Hero } from "../../components/hero/hero"
import { Content } from "../../components/content/content"
import { Navbar } from "../../components/nav/nav"
import { Footer } from "../../components/footer/footer"

export const Home = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <Content />
            <Footer />
        </>
    )
}