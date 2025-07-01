import moment from "moment";
import { Link } from "react-router";
import "./AnimatedBorder.css";
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";

export const UpcomingEventCard = ({ eventData }) => {
  const { _id, ThumbPhoto, eventDate, eventLocation, eventTitle, eventType } =
    eventData;
  const { isDark } = use(AuthContext);

  const originalDate = eventDate;
  const formattedDate = moment
    .utc(originalDate)
    .utcOffset(6 * 60)
    .format("DD/MM/YYYY");

  return (
    <section
      className={`animate-rotate-border hover:shadow-2xl  hover:scale-105 transition-transform duration-300 rounded-2xl bg-conic/[from_var(--border-angle)] from-60% via-70% to-100% p-1 ${
        isDark
          ? "from-white via-[#00818d] to-white"
          : "from-white via-[#ce7efc] to-white"
      }`}
    >
      <div
        className={`rounded-2xl h-full flex flex-col ${
          isDark ? "bg-cyan-50 text-black" : "bg-[#fff8fb]"
        }`}
      >
        <figure className="p-5 pb-0">
          <img
            src={ThumbPhoto}
            alt="bg-img"
            className="rounded-2xl w-full h-48 object-cover"
          />
        </figure>

        <div className="card-body flex flex-col flex-grow">
          <h2 className="card-title">{eventTitle}</h2>
          <div>
            <p>
            <span className=" font-medium">Event Type : </span>
            {eventType}
          </p>
          <p>
            <span className=" font-medium">Location : </span>
            {eventLocation}
          </p>
          <p>
            <span className=" font-medium">Event Date : </span>
            {formattedDate}
          </p>
          </div>

          {/* Spacer pushes button to bottom */}
          <div className="mt-auto">
            <Link
              to={`/event-details/${_id}`}
              className={`btn shadow-none w-full border-none ${
                isDark ? "bg-[#006d77] text-white" : "bg-[#e4c1f9] text-black"
              }`}
            >
              View Event
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
