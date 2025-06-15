import { Bell, Calendar, ChartNoAxesCombined, Earth, Handshake, Lock } from "lucide-react"
import { Fade } from "react-awesome-reveal"

export const Feature = ()=>{
    return(
        <section class="py-16 px-6 sm:px-10 lg:px-20 border-2 border-fuchsia-100 bg-white rounded-2xl">
           <div class="max-w-7xl mx-auto text-center mb-20">
             <h2 class="text-2xl md:text-4xl font-semibold text-gray-900 dark:text-white mb-4">
               Why Choose Eventra?
             </h2>
             <p class=" text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
               Your all-in-one platform to create, join, and track social service events — designed to empower local communities and drive real impact.
             </p>
           </div>
         
           <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12 max-w-7xl mx-auto">
            
             <div class="relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl bg-gradient-to-b from-white to-[#f1dbf7]  hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
               <div class=" bg-[#fcedfc] p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%] ">
                 <Calendar size={40} />
               </div>
               <h3 class="mt-16 text-2xl font-semibold mb-2 ">
                 Easy Event Creation
               </h3>
               <p class="text-gray-600 dark:text-gray-300">
                 Quickly set up events with simple tools — no technical skills required. Customize details and reach your audience effortlessly.
               </p>
             </div>
         
             <div class="relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl bg-gradient-to-b from-white to-[#f1dbf7]  hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
               <div class="bg-[#fcedfc] p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%]">
                 <Handshake size={40} />
               </div>
               <h3 class="mt-16 text-2xl font-semibold mb-2">
                 Community Collaboration
               </h3>
               <p class="text-gray-600 dark:text-gray-300">
                 Join local groups and collaborate with like-minded people passionate about making a difference together.
               </p>
             </div>
         
             <div class="relative mt-4  flex flex-col  xl:p-10 p-6  rounded-xl bg-gradient-to-b from-white to-[#f1dbf7]  hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
               <div class="bg-[#fcedfc] p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%]">
                 <ChartNoAxesCombined size={40} />
               </div>
               <h3 class="mt-16 text-2xl font-semibold mb-2">
                 Impact Tracking
               </h3>
               <p class="text-gray-600 dark:text-gray-300">
                 Monitor your contributions and see how your involvement helps create lasting change in your community.
               </p>
             </div>
         
             <div class="relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl bg-gradient-to-b from-white to-[#f1dbf7]  hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
               <div class="bg-[#fcedfc] p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%]">
                 <Bell size={40} />
               </div>
               <h3 class="mt-16 text-2xl font-semibold mb-2">
                 Real-Time Notifications
               </h3>
               <p class="text-gray-600 dark:text-gray-300">
                 Stay updated with instant alerts about new events, messages, and community announcements.
               </p>
             </div>
         
             <div class="relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl bg-gradient-to-b from-white to-[#f1dbf7]  hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
               <div class="bg-[#fcedfc] p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%]">
                 <Earth size={40} />
               </div>
               <h3 class="mt-16 text-2xl font-semibold mb-2">
                 Local & Global Reach
               </h3>
               <p class="text-gray-600 dark:text-gray-300">
                 Whether it’s your neighborhood or beyond, connect with events and causes that matter to you.
               </p>
             </div>
         
             <div class="relative mt-4 flex flex-col  xl:p-10 p-6  rounded-xl bg-gradient-to-b from-white to-[#f1dbf7]  hover:shadow-2xl  hover:scale-105 transition-transform duration-300">
               <div class="bg-[#fcedfc] p-6 rounded-full absolute -top-12 xl:left-[10%] lg:left-[20%]">
                 <Lock size={40} />
               </div>
               <h3 class="mt-16 text-2xl font-semibold mb-2">
                 Secure & Private
               </h3>
               <p class="text-gray-600 dark:text-gray-300">
                 Your data and participation are protected with industry-standard security measures.
               </p>
             </div>
         
           </div>
         </section>

    )
}