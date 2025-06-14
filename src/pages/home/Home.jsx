import { Banner } from "../../components/Banner/Banner"
import { Feature } from "../../components/Feature/Feature"
import { Gallery } from "../../components/Gallery/Gallery"
import { NewsLetter } from "../../components/News-Letter/NewsLetter"


export const Home = ()=>{
    return(
        <section className="mt-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
            <Banner/>
            <Feature/>
            <Gallery/>
            <NewsLetter/>
        </section>
    )
}