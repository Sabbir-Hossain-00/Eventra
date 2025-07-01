import { use, useEffect } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link } from "react-router";

export const AboutUs = () => {
  const { isDark } = use(AuthContext);

  const teamMeet = [
    {
      name: "Sabbir Hossain",
      role: "Founder & Lead Organizer",
      image: "https://i.ibb.co/jvLdLRC7/sabbir-logo.webp",
    },
    {
      name: "Sakil Atik",
      role: "Volunteer Coordinator",
      image:
        "https://i.ibb.co/5W9MTw1L/sakil.jpg",
    },
    {
      name: "Juweel Mafi",
      role: "Community Manager",
      image:
        "https://i.ibb.co/8gQDLDCr/juwel.jpg",
    },
    {
      name: "Hossain Mashood",
      role: "Tech & Operations",
      image:
        "https://i.ibb.co/23ptBx1t/mashood.jpg",
    },
  ];

  useEffect(() => {
    document.title = "About - Eventra";
    return () => {
      document.title = "Eventra"; // reset on unmount
    };
  }, []);

  return (
    <section className="mt-23 py-10 pb-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-20 min-h-screen space-y-20">
      {/* Hero Split Section */}
      <div className="grid lg:grid-cols-2 gap-10 items-center py-10">
        <div>
          <h1 className="text-4xl font-bold mb-4">We're More Than Events</h1>
          <p className="text-gray-500 leading-relaxed">
            Eventra is built on one belief: real change starts with people like
            you. Whether it's cleaning a street, planting a tree, or giving back
            — we bring together communities that act.
            <br />
            <br />
            Our mission goes beyond organizing events. We create experiences
            that inspire, educate, and unite individuals from all walks of life.
            Every initiative we launch is rooted in empathy, driven by purpose,
            and powered by people who care.
            <br />
            <br />
            Through Eventra, we aim to spark local impact with global meaning —
            because a cleaner, greener, and more generous world starts with one
            small step. Join us in shaping a future that we can all be proud of.
          </p>
        </div>
        <img
          src="https://i.ibb.co/hRNSrW5C/freepik-the-style-is-candid-image-photography-with-natural-78950.jpg"
          alt="About us"
          className="rounded-xl w-full h-100 object-cover shadow-md"
        />
      </div>

      {/* What We Do Section */}
      <div className="py-10">
        <h2 className="text-3xl font-bold text-center mb-10">What We Do</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: "Organize Purpose-Driven Events",
              desc: "From beach cleanups to donation drives — every event we host has a meaningful impact.",
            },
            {
              title: "Empower Local Volunteers",
              desc: "We give people the tools and support to lead change in their own neighborhoods.",
            },
            {
              title: "Build Sustainable Movements",
              desc: "Our goal isn’t just one-time events — we focus on long-term, community-led change.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-md border transition-all duration-300 hover:scale-105 ${
                isDark
                  ? "bg-gray-900 text-white border-[#006d77]"
                  : "bg-white border-[#e4c1f9] text-black"
              }`}
            >
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Meet the Team */}
      <div className="px-4 py-10">
        <h2 className="text-2xl font-semibold text-center mb-8">
          Meet the Team
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMeet?.map((team, i) => (
            <div
              key={i}
              className={`p-6 rounded-xl shadow-lg flex flex-col items-center text-center transition hover:shadow-xl ${
                isDark ? "bg-gray-900 text-white" : "bg-white text-black"
              }`}
            >
              <div className="w-20 h-20 bg-gray-300 rounded-full mb-4">
                <img className="w-20 h-20 rounded-full" src={team.image} alt="" />
              </div>
              <h3 className="font-bold">{team.name}</h3>
              <p className="text-sm text-gray-500">{team.role}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-12 text-center border-y border-dashed border-gray-400">
        <h2 className="text-2xl font-bold mb-4">Let’s Build Together</h2>
        <p className="text-gray-500 mb-6 max-w-xl mx-auto">
          Want to volunteer or launch your own community event? We’re here to
          help you get started.
        </p>
        <Link
          to="/all-events"
          className={`btn shadow-none  border-none ${
            isDark ? "bg-[#006d77] text-white" : "bg-[#e4c1f9] text-black"
          }`}
        >
          View Event
        </Link>
      </div>
    </section>
  );
};
