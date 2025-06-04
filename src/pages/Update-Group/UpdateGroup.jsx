import { use } from "react"
import { AuthContext } from "../../context/AuthContext"
import { useLoaderData, useNavigate } from "react-router";
import axios from "axios";

export const UpdateGroup = ()=>{
    const {isDark , user} = use(AuthContext);
    const navigate = useNavigate();
    const eventData = useLoaderData();
    const {_id,ThumbPhoto,description,eventDate,eventLocation,eventTitle,eventType,userEmail} = eventData ;

    const handleUpdateEvent = (e)=>{
        e.preventDefault();
        const form = e.target ;
        const formData = new FormData(form);
        const updatedData = Object.fromEntries(formData.entries());
        axios.put(`http://localhost:3000/events/${_id}` , updatedData).then((result)=>{
            if(result.data.modifiedCount){
                swal("Event Updated Successfully !", "", "success");
                navigate("/manage-events")
            }
        }).catch(error => console.log(error))

    }

    return(
        <>
            <div
              className={`mt-20 py-10 min-h-screen flex items-center justify-center p-4 transition-all duration-500 ${
                isDark
                  ? "bg-gradient-to-br from-gray-900 via-purple-900 to-black text-gray-300"
                  : "bg-gradient-to-br from-purple-300 via-blue-200 to-blue-300 text-gray-800"
              }`}
            >
              <form
                onSubmit={handleUpdateEvent}
                className={`backdrop-blur-lg border p-5 md:p-8 rounded-xl w-full max-w-xl shadow-2xl ${
                  isDark ? "bg-white/5 border-white/20" : "bg-white/10 border-white/50"
                }`}
              >
                <h2 className="text-2xl font-bold text-center mb-6">Update an Event</h2>
        
                <label className="block mb-2 font-medium">
                  Event Title:<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="eventTitle"
                  defaultValue={eventTitle}
                  className="w-full p-2 mb-4 border rounded bg-transparent"
                  required
                />
        
                <label className="block mb-2 font-medium">
                  Event Type:<span className="text-red-500">*</span>
                </label>
                <select
                  name="eventType"
                  defaultValue={eventType}
                  required
                  className="w-full p-2 mb-4 border rounded bg-transparent"
                >
                  <option value="Plantation">Plantation</option>
                  <option value="Donation">Donation</option>
                  <option value="Cleanup">Cleanup</option>
                </select>
        
                <div className="flex md:flex-row flex-col gap-2 mb-4">
                  <div className="w-full">
                    <label className="block mb-2 font-medium">
                      User Email:<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="email"
                      name="userEmail"
                      value={user.email}
                      readOnly
                      className="w-full p-2 border rounded bg-transparent"
                      required
                    />
                  </div>
                </div>
        
                <div className="flex md:flex-row flex-col gap-2 mb-4">
                  <div className="w-full">
                    <label className="block mb-2 font-medium">
                     Event Location:<span className="text-red-500">*</span>
                    </label>
                    <input
                      type="text"
                      name="eventLocation"
                      defaultValue={eventLocation}
                      className="w-full p-2 border rounded bg-transparent"
                      required
                    />
                  </div>
                </div>
        
                <label className="block mb-2 font-medium">
                 Event Date:<span className="text-red-500">*</span>
                </label>
                <input
                  type="date"
                  name="eventDate"
                  defaultValue={eventDate}
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full p-2 mb-4 border  rounded bg-transparent"
                  required
                />
        
                <label className="block mb-2 font-medium">
                 Thumbnail Image URL:<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ThumbPhoto"
                  defaultValue={ThumbPhoto}
                  className="w-full p-2 mb-4 border rounded bg-transparent"
                  required
                />
        
                <label className="block mb-2 font-medium">
                  Description:<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={description}
                  rows="4"
                  className="w-full p-2 mb-4 border rounded bg-transparent"
                  required
                ></textarea>
        
                <button
                  type="submit"
                  className="btn w-full border-none bg-purple-500 text-white font-bold py-2 rounded hover:bg-purple-600 transition"
                >
                  Create
                </button>
              </form>
            </div>
        </>
    )
}