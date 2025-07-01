import { useEffect } from "react"
import { Banner } from "../../components/Banner/Banner"
import { Feature } from "../../components/Feature/Feature"
import { Gallery } from "../../components/Gallery/Gallery"
import { NewsLetter } from "../../components/News-Letter/NewsLetter"
import { EventCategories } from "../../components/EventCategories/EventCategories"
import { UpcomingEventsPreview } from "../../components/EventPreview/UpcomingEventsPreview"


export const Home = ()=>{
    useEffect(() => {
            document.title = "Home - Eventra";
            return () => {
              document.title = "Eventra"; // reset on unmount
            };
          }, []);
    return(
        <section className="mt-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-20">
            <Banner/>
            <Feature/>
            <EventCategories/>
            <UpcomingEventsPreview/>
            <Gallery/>
            <NewsLetter/>
        </section>
    )
}