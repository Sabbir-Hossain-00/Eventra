import moment from "moment";
import { use } from "react";
import { Link } from "react-router";
import { AuthContext } from "../../context/AuthContext";
import { Fade } from "react-awesome-reveal";

export const EventCard = ({ event }) => {
  const { isDark } = use(AuthContext);
  const { _id, ThumbPhoto, eventTitle, eventType, eventLocation, eventDate } =
    event;

  const formattedDate = moment
    .utc(eventDate)
    .utcOffset(6 * 60)
    .format("DD/MM/YYYY");

  return (
    <Fade>
      <div
        className={`shadow-md rounded-lg overflow-hidden flex flex-col h-full ${
          isDark ? "bg-gray-900" : "bg-white"
        }`}
      >
        <img
          src={ThumbPhoto}
          alt={eventTitle}
          className="w-full h-40 object-cover"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h2 className="text-lg font-bold mb-2">{eventTitle}</h2>
          <p className="text-sm">
            <span className="font-medium">Type:</span> {eventType}
          </p>
          <p className="text-sm">
            <span className="font-medium">Location:</span> {eventLocation}
          </p>
          <p className="text-sm mb-4">
            <span className="font-medium">Date:</span> {formattedDate}
          </p>
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
    </Fade>
  );
};
