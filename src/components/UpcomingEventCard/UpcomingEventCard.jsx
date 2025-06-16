import moment from "moment";
import { Link } from "react-router";
import "./AnimatedBorder.css"; 
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

export const UpcomingEventCard = ({ eventData }) => {
  const {
    _id,
    ThumbPhoto,
    description,
    eventDate,
    eventLocation,
    eventTitle,
    eventType,
    userEmail,
  } = eventData;
  const {isDark} = use(AuthContext);

  const originalDate = eventDate;
  const formattedDate = moment
    .utc(originalDate)
    .utcOffset(6 * 60)
    .format("YYYY/MM/DD");

  return (
    <section className={`animate-rotate-border rounded-2xl bg-conic/[from_var(--border-angle)] from-60% via-90% to-100% p-1 ${isDark ? "from-black via-[#006d77] to-black":"from-white via-[#e4c1f9] to-white"}`}> 

      <div className={`rounded-2xl h-full ${isDark ? "bg-[#000000]":"bg-white"}`}>
          <figure>
            <img src={ThumbPhoto} alt="bg-img" className="rounded-t-2xl w-full h-48 object-cover" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{eventTitle}</h2>
            <p><span className=" font-medium">Event Type : </span>{eventType}</p>
            <p><span className=" font-medium">Location : </span>{eventLocation}</p>
            <p><span className=" font-medium">Event Date : </span>{formattedDate}</p>
            <div className="card-actions">
              <Link to={`/event-details/${_id}`} className={`btn shadow-none border-none ${isDark? "bg-[#006d77] text-white": "bg-[#e4c1f9] text-black"}`}>
                View Event
              </Link>
            </div>
          </div>
      </div>

    </section>
  );
};
