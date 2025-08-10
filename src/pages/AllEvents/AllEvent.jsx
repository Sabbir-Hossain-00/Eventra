import { useLoaderData } from "react-router";
import { use, useEffect, useState } from "react";
import { EventCard } from "./EventCard";
import { AuthContext } from "../../context/AuthContext";


export const AllEvent = () => {
  const events = useLoaderData();
  const {isDark} = use(AuthContext);
  const [sortOrder, setSortOrder] = useState("latest");

  const sortedEvents = [...events].sort((a, b) => {
    const dateA = new Date(a.eventDate);
    const dateB = new Date(b.eventDate);
    return sortOrder === "latest" ? dateB - dateA : dateA - dateB;
  });

  useEffect(() => {
              document.title = "All Event - Eventra";
              return () => {
                document.title = "Eventra"; // reset on unmount
              };
            }, []);

  return (
    <section className=" min-h-screen container mx-auto px-3 md:px-6 lg:px-8 xl:px-20 mt-23 py-10 space-y-8">
      <div>
        <h1 className="text-3xl font-bold text-center">All  Events</h1>
        <p className={`text-center max-w-2xl mt-2 mx-auto ${isDark?" text-gray-300" :" text-gray-600"}`}>
          Explore our upcoming cleaning, planting, and donation events. Join us
          in making a difference!
        </p>
      </div>

      <div className={`flex justify-end items-center gap-2`}>
        <p className="font-medium">Sort by :</p>
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={`select  w-full max-w-26 ${isDark? "bg-gray-900 text-white":"bg-white text-black"}`}
        >
          <option value="latest"> Oldest</option>
          <option value="oldest"> Latest</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8">
        {sortedEvents.map((event) => (
          <EventCard key={event._id} event={event} />
        ))}
      </div>
    </section>
  );
};
