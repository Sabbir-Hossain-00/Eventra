import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { JoinedEventCard } from "../../components/Joined-Event-Card/JoinedEventCard";
import { useAxiousSecure } from "../../hooks/useAxiousSecure";
import { Loader } from "../Loader/Loader";

export const JoinedEvent = ()=>{
    const {user} = use(AuthContext);
    const [joinedEventsData , setJoinedEventData] = useState(null)
    const axiousSecure = useAxiousSecure();
    const [loading , setLoading] = useState(true)
    
    const fetchData = async()=>{

        axiousSecure.get(`https://eventra-server.vercel.app/joinedEvents?email=${user.email}`).then((res)=>{
        setJoinedEventData(res.data)
        setLoading(false)
        }).catch(error => console.log(error))
        
    }
      
    useEffect(()=>{
        fetchData()
    },[])

    if(loading){
        return <Loader/>
    }

    return(
        <section className="py-20 pt-30">
          <div className="grid grid-cols-1 gap-6">
            {
                joinedEventsData?.map((joinedEventData)=>{
                    return <JoinedEventCard key={joinedEventData._id} joinedEventData={joinedEventData} />
                })
            }
          </div>
        </section>
    )
}