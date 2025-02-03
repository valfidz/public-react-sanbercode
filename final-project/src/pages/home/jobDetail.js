import { Hero } from "../../components/hero/hero"
import { Content } from "../../components/content/content"
import { Navbar } from "../../components/nav/nav"
import { Footer } from "../../components/footer/footer"
import { useParams } from "react-router-dom"
import { ContentDetail } from "../../components/content/contentDetail"

export const JobDetail = () => {
    const { id } = useParams()
    return (
        <>
            <Navbar />
            <Hero />
            <ContentDetail jobId={id}/>
            <Footer />
        </>
    )
}