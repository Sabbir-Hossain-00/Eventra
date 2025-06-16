import { Bell, Calendar, ChartNoAxesCombined, Earth, Handshake, Lock } from "lucide-react"
import { use } from "react"
import { Fade } from "react-awesome-reveal"
import { AuthContext } from "../../context/AuthContext"

export const Feature = ()=>{
  const {isDark} = use(AuthContext)
    return(
        <section className={`py-16 px-6 sm:px-10 lg:px-20 border-2  rounded-2xl ${isDark ? "bg-[#000000] border-[#006d77]": "bg-white border-fuchsia-100"}`}>
           <div className="max-w-7xl mx-auto text-center mb-20">
             <h2 className="text-2xl md:text-4xl font-semibold  mb-4">
               Why Choose Eventra?
             </h2>
             <p className=" text-lg   max-w-2xl mx-auto">
               Your all-in-one platform to create, join, and track social service events — designed to empower local communities and drive real impact.
             </p>
           </div>
         
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
             <div className={`relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl  hover:shadow-2xl  hover:scale-105 transition-transform duration-300 ${isDark ? "bg-gradient-to-b from-[#000000] to-[#006d77] ": "bg-gradient-to-b from-white to-[#f1dbf7]"}`}>
               <div className={` p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%] ${isDark ? "bg-[#006d77]": "bg-[#fcedfc]"}`}>
                 <Calendar size={40} />
               </div>
               <h3 className="mt-16 text-2xl font-semibold mb-2 ">
                 Easy Event Creation
               </h3>
               <p className="">
                 Quickly set up events with simple tools — no technical skills required. Customize details and reach your audience effortlessly.
               </p>
             </div>
         
             <div className={`relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl  hover:shadow-2xl  hover:scale-105 transition-transform duration-300 ${isDark ? "bg-gradient-to-b from-[#000000] to-[#006d77] ": "bg-gradient-to-b from-white to-[#f1dbf7]"}`}>
               <div className={` p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%] ${isDark ? "bg-[#006d77]": "bg-[#fcedfc]"}`}>
                 <Handshake size={40} />
               </div>
               <h3 className="mt-16 text-2xl font-semibold mb-2">
                 Community Collaboration
               </h3>
               <p className="">
                 Join local groups and collaborate with like-minded people passionate about making a difference together.
               </p>
             </div>
         
             <div className={`relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl  hover:shadow-2xl  hover:scale-105 transition-transform duration-300 ${isDark ? "bg-gradient-to-b from-[#000000] to-[#006d77] ": "bg-gradient-to-b from-white to-[#f1dbf7]"}`}>
               <div className={` p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%] ${isDark ? "bg-[#006d77]": "bg-[#fcedfc]"}`}>
                 <ChartNoAxesCombined size={40} />
               </div>
               <h3 className="mt-16 text-2xl font-semibold mb-2">
                 Impact Tracking
               </h3>
               <p className="">
                 Monitor your contributions and see how your involvement helps create lasting change in your community.
               </p>
             </div>
         
             <div className={`relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl  hover:shadow-2xl  hover:scale-105 transition-transform duration-300 ${isDark ? "bg-gradient-to-b from-[#000000] to-[#006d77] ": "bg-gradient-to-b from-white to-[#f1dbf7]"}`}>
               <div className={` p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%] ${isDark ? "bg-[#006d77]": "bg-[#fcedfc]"}`}>
                 <Bell size={40} />
               </div>
               <h3 className="mt-16 text-2xl font-semibold mb-2">
                 Real-Time Notifications
               </h3>
               <p className="">
                 Stay updated with instant alerts about new events, messages, and community announcements.
               </p>
             </div>
         
             <div className={`relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl  hover:shadow-2xl  hover:scale-105 transition-transform duration-300 ${isDark ? "bg-gradient-to-b from-[#000000] to-[#006d77] ": "bg-gradient-to-b from-white to-[#f1dbf7]"}`}>
               <div className={` p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%] ${isDark ? "bg-[#006d77]": "bg-[#fcedfc]"}`}>
                 <Earth size={40} />
               </div>
               <h3 className="mt-16 text-2xl font-semibold mb-2">
                 Local & Global Reach
               </h3>
               <p className="">
                 Whether it’s your neighborhood or beyond, connect with events and causes that matter to you.
               </p>
             </div>
         
             <div className={`relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl  hover:shadow-2xl  hover:scale-105 transition-transform duration-300 ${isDark ? "bg-gradient-to-b from-[#000000] to-[#006d77] ": "bg-gradient-to-b from-white to-[#f1dbf7]"}`}>
               <div className={` p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%] ${isDark ? "bg-[#006d77]": "bg-[#fcedfc]"}`}>
                 <Lock size={40} />
               </div>
               <h3 className="mt-16 text-2xl font-semibold mb-2">
                 Secure & Private
               </h3>
               <p className="">
                 Your data and participation are protected with industry-standard security measures.
               </p>
             </div>
         
           </div>
         </section>

    )
}