import { useLoaderData } from "react-router"
import { UpcomingEventCard } from "../../components/UpcomingEventCard/UpcomingEventCard";
import axios from "axios";
import { use, useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

export const UpcomingEvents = ()=>{
    const initialeventsData = useLoaderData();
    const [category, setCategory] = useState("");
    const [searchValue , setSearchValue] = useState("");
    const [eventsData , setEventData] = useState(initialeventsData);
    const {isDark} = use(AuthContext);



    const handleSearch = (e)=>{
        e.preventDefault();
    }


    useEffect(()=>{
        if(searchValue){
            axios.get(`https://eventra-server.vercel.app/upcomingEventsByTitle?title=${searchValue}`).then((res)=>{
            console.log(res.data)
            setEventData(res.data)
        }).then(error => console.log(error))
        }
    },[searchValue])


    useEffect(()=>{
        if(category){
            axios.get(`https://eventra-server.vercel.app/upcomingEventsByCategory?category=${category}`).then((res)=>{
            console.log(res.data)
            setEventData(res.data)
        }).then(error => console.log(error))
        }
    },[category])

    return(
        <section className="pt-30 pb-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-20">

             <div className="mb-12">
                <h1 className="md:text-3xl text-2xl text-center font-medium mb-2">Discover and Join Upcoming <span className={`${isDark?"text-[#006d77]":"text-[#e4c1f9]"}`}>Events</span></h1>
                <p className="text-center">Explore community-driven events like cleanups, donations, and tree plantings happening near you. <br /> Get involved, make an impact, and help build a better tomorrow—one event at a time.</p>
            </div>

            <div className="mb-10 flex justify-center items-center ">

                 <div className=" relative">
                  <select
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                  required
                  className={`appearance-none border-0  w-fit p-3 pr-6 rounded-none rounded-tl-lg rounded-bl-lg  ${isDark? "bg-[#006d77]" :"bg-[#e4c1f9]"}`}
                  >
                  <option value="">All</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Donation">Donation</option>
                  <option value="Cleanup">Cleanup</option>
                  </select>
                  <div className=" absolute top-4 right-1">
                     <ChevronDown size={18}/>
                  </div>
                </div>

                <form onSubmit={handleSearch} className="flex justify-center items-center">
                  <input 
                  value={searchValue} 
                  onChange={(e)=> setSearchValue(e.target.value)} 
                  type="text" 
                  name="search" 
                  placeholder="Search an event"
                  className={`bg-white md:px-6 pl-3 md:pr-40 py-3 text-black`}
                  />
                  <button className={`btn md:py-6 py-[23px] rounded-none rounded-tr-lg shadow-none rounded-br-lg border-0 ${isDark? "bg-[#006d77] text-white" :"bg-[#e4c1f9]"}`}><Search size={18} /></button>
                </form>
            </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {
                eventsData?.map((eventData)=>{
                    return <UpcomingEventCard key={eventData._id} eventData={eventData} />
                })
            }
           </div>
        </section>
    )
}