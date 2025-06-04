import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { JoinedEventCard } from "../../components/Joined-Event-Card/JoinedEventCard";

export const JoinedEvent = ()=>{
    const {user} = use(AuthContext);
    const [joinedEventsData , setJoinedEventData] = useState(null)
    
    
    const fetchData = async()=>{
        const accessToken = user.accessToken;
        const response = await fetch(`http://localhost:3000/joinedEvents?email=${user.email}`,{
            headers:{
                authorization: `Bearer ${accessToken}`
            }
        })
        const data = await response.json();
        setJoinedEventData(data)
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