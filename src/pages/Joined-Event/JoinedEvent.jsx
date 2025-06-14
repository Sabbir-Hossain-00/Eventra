import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { JoinedEventCard } from "../../components/Joined-Event-Card/JoinedEventCard";
import { useAxiousSecure } from "../../hooks/useAxiousSecure";

export const JoinedEvent = ()=>{
    const {user} = use(AuthContext);
    const [joinedEventsData , setJoinedEventData] = useState(null)
    const axiousSecure = useAxiousSecure();
    
    
    const fetchData = async()=>{
        if(user){
            axiousSecure.get(`https://eventra-server.vercel.app/joinedEvents?email=${user.email}`).then((res)=>{
            console.log(res.data)
            setJoinedEventData(res.data)
            }).catch(error => console.log(error))
        }
        
    }
      
    useEffect(()=>{
        fetchData()
    },[])


    return(
        <>
          <div>
            {
                joinedEventsData?.map((joinedEventData)=>{
                    return <JoinedEventCard key={joinedEventData._id} joinedEventData={joinedEventData} />
                })
            }
          </div>
        </>
    )
}