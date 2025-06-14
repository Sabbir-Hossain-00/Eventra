import { use, useEffect, useState } from "react";
import { useLoaderData, useNavigate, useParams } from "react-router"
import { AuthContext } from "../../context/AuthContext";
import { useAxiousSecure } from "../../hooks/useAxiousSecure";
import { Loader } from "../Loader/Loader";

export const EventDetails = ()=>{
    const {user} = use(AuthContext)
    const navigate = useNavigate();
    const axiousSecure = useAxiousSecure();
    const {id} = useParams();
    const [eventData , setEventData] = useState(null)
    const [loading , setLoading] = useState(true);
    
    const fetchingData = ()=>{
        axiousSecure.get(`https://eventra-server.vercel.app/eventDetails/${id}`).then((res)=>{
          setEventData(res.data)
          setLoading(false)
        }).catch(error => console.log(error))
      }


    useEffect(()=>{
      fetchingData();
    },[])

   if(loading){
    return <Loader/>
   }



    const handleJoinEvent = ()=>{
      const {_id,ThumbPhoto,description,eventDate,eventLocation,eventTitle,eventType,userEmail} = eventData ;

      const joinedEventData = {
        ThumbPhoto,
        description,
        eventDate,
        eventLocation,
        eventTitle,
        eventType,
        userEmail:user.email,
        userName:user.displayName,
        userPhoto:user.photoURL,
      }


      axiousSecure.post("https://eventra-server.vercel.app/joinedEvents",joinedEventData).then((response)=>{
        if(response.data.insertedId){
          swal(" Joined a event successfully!", "Welcome to HobMeet", "success");
          navigate("/joined-events")
        }
      }).catch(error => console.log(error))

      
    }
    return(
        <section className="pt-30 pb-10">
          <div className="mx-auto w-1/2 card card-side bg-base-100 shadow-sm">
            <figure>
              <img
                src="https://img.daisyui.com/images/stock/photo-1635805737707-575885ab0820.webp"
                alt="Movie" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{eventData?.eventTitle}</h2>
              <p>{eventData?.description}</p>
              <div className="card-actions ">
                <button onClick={handleJoinEvent} className="btn btn-primary">Join Event</button>
              </div>
            </div>
          </div>
        </section>
    )
}