import { useLoaderData } from "react-router"
import { UpcomingEventCard } from "../../components/UpcomingEventCard/UpcomingEventCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";

export const UpcomingEvents = ()=>{
    const initialeventsData = useLoaderData();
    const [category, setCategory] = useState("");
    const [searchValue , setSearchValue] = useState("")
    const [eventsData , setEventData] = useState(initialeventsData)



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
        <section className="pt-30 pb-10 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
            <div className="mb-10 flex justify-center items-center ">

                 <div className=" relative">
                  <select
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                  required
                  className="appearance-none border-0 border-r border-gray-300 w-fit p-3 pr-6 rounded-none rounded-tl-md rounded-bl-md  bg-gray-200"
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
                  placeholder="Search Event"
                  className="bg-white px-3 md:pr-30 py-3"
                  />
                  <button className="btn py-6 rounded-none rounded-tr-md rounded-br-md border-0 bg-[#e4c1f9]"><Search size={18} /></button>
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