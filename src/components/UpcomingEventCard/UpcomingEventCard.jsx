import moment from "moment";
import { Link } from "react-router";

export const UpcomingEventCard = ({eventData})=>{
    const {_id,ThumbPhoto,description,eventDate,eventLocation,eventTitle,eventType,userEmail} = eventData ;
    const originalDate = eventDate;
    const formattedDate = moment.utc(originalDate).utcOffset(6 * 60).format("YYYY/MM/DD");

    return(
        <section >
          <div className="card bg-base-100  shadow-sm">
            <figure>
              <img
                src={ThumbPhoto}
                alt="bg-img" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{eventTitle}</h2>
              <p>{formattedDate}</p>
              <p>{description}</p>
              <div className="card-actions ">
                <Link to={`/event-details/${_id}`} className="btn btn-primary"> View Event</Link>
              </div>
            </div>
          </div>
        </section>
    )
}