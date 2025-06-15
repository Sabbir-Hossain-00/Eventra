import moment from "moment";
import { Link } from "react-router";
import "./AnimatedBorder.css"; 

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

  const originalDate = eventDate;
  const formattedDate = moment
    .utc(originalDate)
    .utcOffset(6 * 60)
    .format("YYYY/MM/DD");

  return (
    <section className="animate-rotate-border rounded-2xl bg-conic/[from_var(--border-angle)] from-white via-[#e4c1f9] to-white from-70% via-80% to-100% p-1">
      
  <div className="rounded-2xl bg-gradient-to-t from-white to-[#faf4fc] shadow-sm">
    <figure>
      <img src={ThumbPhoto} alt="bg-img" className="rounded-t-2xl w-full h-48 object-cover" />
    </figure>
    <div className="card-body">
      <h2 className="card-title">{eventTitle}</h2>
      <p>{formattedDate}</p>
      <p>{description}</p>
      <div className="card-actions">
        <Link to={`/event-details/${_id}`} className="btn bg-[#e4c1f9]">
          View Event
        </Link>
      </div>
    </div>
</div>

    </section>
  );
};
