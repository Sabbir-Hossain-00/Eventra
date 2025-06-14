import { useLoaderData } from "react-router"
import { UpcomingEventCard } from "../../components/UpcomingEventCard/UpcomingEventCard";
import axios from "axios";
import { useEffect, useState } from "react";

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
            <div className="mb-10 flex justify-center items-center gap-10">
                <form onSubmit={handleSearch} className="">
                <input value={searchValue} onChange={(e)=> setSearchValue(e.target.value)} type="text" name="search" className="bg-white px-3 py-1.5"/>
                <button className="btn">Search</button>
            </form>
            <div>
                  <select
                  value={category}
                  onChange={(e)=>setCategory(e.target.value)}
                  required
                  className="w-full p-2  border rounded bg-transparent"
                >
                  <option value="">Select Category</option>
                  <option value="Plantation">Plantation</option>
                  <option value="Donation">Donation</option>
                  <option value="Cleanup">Cleanup</option>
                </select>
            </div>
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