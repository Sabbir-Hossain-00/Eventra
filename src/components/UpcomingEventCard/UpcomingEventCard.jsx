import { Link } from "react-router";

export const UpcomingEventCard = ({eventData})=>{
    const {_id,ThumbPhoto,description,eventDate,eventLocation,eventTitle,eventType,userEmail} = eventData ;
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
              <p>{eventDate}</p>
              <p>{description}</p>
              <div className="card-actions ">
                <Link to={`/event-details/${_id}`} className="btn btn-primary"> View Event</Link>
              </div>
            </div>
          </div>
        </section>
    )
}