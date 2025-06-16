import moment from "moment";
import { Fade } from "react-awesome-reveal";

export const JoinedEventCard = ({joinedEventData})=>{

    const {_id,ThumbPhoto,description,eventDate,eventLocation,eventTitle,eventType,userEmail} = joinedEventData ;

    const originalDate = eventDate;
          const formattedDate = moment
            .utc(originalDate)
            .utcOffset(6 * 60)
            .format("YYYY/MM/DD");

    return(
        <Fade>
          <section className="container mx-auto px-3 md:px-6 lg:px-8 xl:px-20">
          <div className="px-3 py-4 md:px-20 md:py-20 card lg:card-side bg-gradient-to-l from-white to-[#eee5f1] border-2 rounded-2xl border-white">
            <figure className="w-full">
              <img
                src={ThumbPhoto}
                alt="Movie"
                className="rounded-2xl h-[300px] w-full" />
            </figure>
            <div className="card-body">
              <h2 className="card-title lg:text-3xl text-2xl text-[#d8a6f5] mb-2">{eventTitle}</h2>
              <p className=""><span className="font-medium">Event Type :</span> <span className="bg-fuchsia-100  text-xs py-2 px-4 rounded-full">{eventTitle}</span></p>
              <p className=""><span className="font-medium">Event Date :</span> {formattedDate}</p>
              <p className=""><span className="font-medium">Location :</span> {eventLocation}</p>
              <p className=""><span className="font-medium">Description :</span> {description}</p>
              {/* <div className="card-actions ">
                <button onClick={handleJoinEvent} className="btn bg-[#e4c1f9]">Join Event</button>
              </div> */}
            </div>
          </div>
        </section>
        </Fade>
    )
}