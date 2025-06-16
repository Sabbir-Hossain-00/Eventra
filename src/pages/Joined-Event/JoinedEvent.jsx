import { use, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useAxiousSecure } from "../../hooks/useAxiousSecure";
import { Loader } from "../Loader/Loader";
import { EmptyJoinedEvent } from "./EmptyJoinedEvent";
import moment from "moment";

export const JoinedEvent = ()=>{
    const {user , isDark} = use(AuthContext);
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
    },[]);

    useEffect(() => {
        document.title = "Joined-Event - Eventra";
        return () => {
          document.title = "Eventra"; // reset on unmount
        };
      }, []);

    if(loading){
        return <Loader/>
    }
    if(joinedEventsData.length === 0){
        return <EmptyJoinedEvent/>
    }

      
    return(
        <section className="py-20 pt-30 min-h-screen container mx-auto px-3 md:px-6 lg:px-8 xl:px-20">

          <div className="mb-12">
                <h1 className="md:text-3xl text-2xl text-center font-medium mb-2">Your Joined Events <span className={`${isDark?"text-[#006d77]":"text-[#e4c1f9]"}`}>Overview</span></h1>
                <p className="text-center">Track all the events you’ve joined in one place. Stay updated, manage your participation, <br /> and relive your contributions to making a positive impact in your community.</p>
          </div>

          <div className=" overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className={`border border-gray-200 text-center ${isDark ? "text-white" :"text-gray-700"}`}>
                  <th className="border border-gray-200">Author</th>
                  <th className="border border-gray-200">Event Title</th>
                  <th className="border border-gray-200">Event Type</th>
                  <th className="border border-gray-200">Event Date</th>
                </tr>
              </thead>
              <tbody>
                {
                  joinedEventsData?.map((signleData)=>{
  
                    const originalDate = signleData?.eventDate;
                      const formattedDate = moment
                        .utc(originalDate)
                        .utcOffset(6 * 60)
                        .format("DD/MM/YYYY");
  
  
                    return <tr className="border border-gray-200 text-center" key={signleData._id}>
                              <td className="border border-gray-200">
                                <div className="flex items-center  gap-3">
                                  <div className="avatar">
                                    <div className="rounded-lg h-12 w-12">
                                      <img
                                        src={signleData.ThumbPhoto}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col  pr-2 items-start">
                                    <div className="font-bold">{signleData.userName}</div>
                                    <div className="text-sm opacity-50">{signleData.eventLocation}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="border border-gray-200">{signleData.eventTitle}</td>
                              <td className="border border-gray-200">{signleData.eventType}</td>
                              <td className="border border-gray-200">{formattedDate}</td>
                            </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </section>
    )
}