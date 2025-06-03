import { useLoaderData } from "react-router"
import { UpcomingEventCard } from "../../components/UpcomingEventCard/UpcomingEventCard";

export const UpcomingEvents = ()=>{
    const eventsData = useLoaderData();
    return(
        <section className="pt-30 pb-10">
           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                eventsData?.map((eventData)=>{
                    return <UpcomingEventCard key={eventData._id} eventData={eventData} />
                })
            }
           </div>
        </section>
    )
}