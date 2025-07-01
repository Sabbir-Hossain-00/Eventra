import { Link } from "react-router"; 
import { use } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useLoaderData } from "react-router";
import { EventCard } from "../../pages/AllEvents/EventCard";

export const UpcomingEventsPreview = () => {
  // Show only first 3 or 6 events
  const {isDark} = use(AuthContext)
  const events = useLoaderData();
  const previewEvents = events.slice(0, 4);

  return (
    <section
      className={`py-12 px-4 lg:px-16 rounded-2xl mt-20 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Upcoming Events</h2>
        <p className="text-sm text-gray-400 mt-2">
          Don’t miss our upcoming community events. Be the change!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4  gap-8">
        {previewEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>

      <div className="mt-10 text-center">
        <Link
          to="/upcoming-events"
          className={`btn px-6 py-3 border-none shadow-none rounded-full font-semibold ${
            isDark ? "bg-[#006d77] text-white" : "bg-[#e4c1f9] text-black"
          }`}
        >
          View All Events
        </Link>
      </div>
    </section>
  );
};
