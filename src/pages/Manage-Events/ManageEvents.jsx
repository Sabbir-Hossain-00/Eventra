import { use, useEffect, useState } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useNavigate } from "react-router";
import { useAxiousSecure } from "../../hooks/useAxiousSecure";
import { Loader } from "../Loader/Loader";
import moment from "moment";

export const ManageEvents = ()=>{
    const {user , isDark} = use(AuthContext);
    const [eventsData , setEventsData] = useState(null);
    const navigate = useNavigate();
    const axiousSecure = useAxiousSecure();
    const [loading , setLoading] = useState(true)

    
    const fetchData = async()=>{
        axiousSecure.get(`https://eventra-server.vercel.app/manageEvents?email=${user.email}`).then((res)=>{
          setEventsData(res.data)
          setLoading(false)
        }).catch(error => console.log(error))
    }

    useEffect(()=>{
        fetchData()
    },[])


    const handleDeleteEvent = (id)=>{
      axiousSecure.delete(`https://eventra-server.vercel.app/events/${id}`).then((result)=>{
        if(result.data.deletedCount){
          const remainingEvents = eventsData.filter((item)=> item._id !== id);
          setEventsData(remainingEvents)
        }
      }).catch(error => console.log(error))
    }

    if(loading){
      return <Loader/>
    }


    return(
        <section className="mt-10 min-h-screen py-20 container mx-auto px-3 md:px-6 lg:px-8 xl:px-14">
          <h1 className="text-center text-2xl md:text-4xl mb-2 font-medium">The Events You Created
          </h1>
          <p className="text-center mb-10 ">Manage all the events you've created in one place. Update details, remove events, <br /> or explore your communities—right from your dashboard.</p>
          <div className=" overflow-x-auto">
            <table className="table w-full">
              {/* head */}
              <thead>
                <tr className={`border border-gray-200 text-center ${isDark ? "text-white" :"text-gray-700"}`}>
                  <th className="border border-gray-200">Name</th>
                  <th className="border border-gray-200">Event Title</th>
                  <th className="border border-gray-200">Event Type</th>
                  <th className="border border-gray-200">Date</th>
                  <th className="border border-gray-200">Update</th>
                  <th className="border border-gray-200">Delete</th>
                </tr>
              </thead>
              <tbody>
                {
                  eventsData?.map((signleData)=>{

                    const originalDate = signleData?.eventDate;
                      const formattedDate = moment
                        .utc(originalDate)
                        .utcOffset(6 * 60)
                        .format("YYYY/MM/DD");


                    return <tr className="border border-gray-200 text-center" key={signleData._id}>
                              <td className="border border-gray-200">
                                <div className="flex items-center  gap-3">
                                  <div className="avatar">
                                    <div className="mask mask-squircle h-12 w-12">
                                      <img
                                        src={signleData.photo}
                                        alt="Avatar Tailwind CSS Component" />
                                    </div>
                                  </div>
                                  <div className="flex flex-col min-w-fit pr-2 items-start">
                                    <div className="font-bold">{signleData.userName}</div>
                                    <div className="text-sm opacity-50">{signleData.eventLocation}</div>
                                  </div>
                                </div>
                              </td>
                              <td className="border border-gray-200">{signleData.eventTitle}</td>
                              <td className="border border-gray-200">{signleData.eventType}</td>
                              <td className="border border-gray-200">{formattedDate}</td>
                              <td className="border border-gray-200">
                                <button onClick={()=>navigate(`/updategroup/${signleData._id}`)} className="btn border-none  bg-[#e4c1f9]">Update</button>
                              </td>
                              <td className="border border-gray-200">
                                <button onClick={()=>handleDeleteEvent(signleData._id)} className="btn border-none bg-rose-500 hover:bg-rose-600 text-white">Delete</button>
                              </td>
                            </tr>
                  })
                }
              </tbody>
            </table>
          </div>
        </section>
    )
}