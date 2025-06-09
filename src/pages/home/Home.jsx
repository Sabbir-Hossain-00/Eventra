import { Banner } from "../../components/Banner/Banner"
import { Feature } from "../../components/Feature/Feature"
import { Gallery } from "../../components/Gallery/Gallery"
import { NewsLetter } from "../../components/News-Letter/NewsLetter"


export const Home = ()=>{
    return(
        <section className="mt-20">
            <Banner/>
            <Feature/>
            <Gallery/>
            <NewsLetter/>
        </section>
    )
}