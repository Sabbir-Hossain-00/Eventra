import { use } from "react";
import { FaRecycle, FaSeedling, FaHandsHelping } from "react-icons/fa";
import { AuthContext } from "../../context/AuthContext";

export const EventCategories = () => {
    const {isDark} = use(AuthContext)
  const categories = [
    {
      title: "Cleaning Events",
      icon: <FaRecycle size={40} />,
      description:
        "Join community clean-up drives and help create a cleaner environment.",
    },
    {
      title: "Planting Events",
      icon: <FaSeedling size={40} />,
      description:
        "Participate in planting trees to make our planet greener and healthier.",
    },
    {
      title: "Donation Events",
      icon: <FaHandsHelping size={40} />,
      description:
        "Support those in need through our organized donation campaigns.",
    },
  ];

  return (
    <section
      className={`py-12 px-4 lg:px-16 rounded-2xl mt-20 ${
        isDark ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <div className="text-center mb-10">
        <h2 className="text-3xl font-bold">Explore Event Categories</h2>
        <p className="text-sm text-gray-400 mt-2">
          Get involved in the causes that matter to you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {categories.map((cat, index) => (
          <div
            key={index}
            className={`rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 flex flex-col items-center text-center ${
              isDark ? "bg-[#006d77] text-white" : "bg-[#e4c1f9] text-black"
            }`}
          >
            <div className="mb-4">{cat.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{cat.title}</h3>
            <p className="text-sm">{cat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
