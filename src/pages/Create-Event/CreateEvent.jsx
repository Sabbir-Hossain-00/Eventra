import { use, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import axios from "axios";
import { useNavigate } from "react-router";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import './customDatePickerWidth.css';
import { useAxiousSecure } from "../../hooks/useAxiousSecure";
import moment from "moment";

export const CreateEvent = ()=>{
    const {user, isDark} = use(AuthContext);
    const [eventDate , setEventDate] = useState(null)
    const navigate = useNavigate();
    const axiousSecure = useAxiousSecure();

    const handleCreateEvent = (e)=>{
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const groupData = Object.fromEntries(formData.entries());
        console.log(groupData)

        // groupData.eventDate = new Date(eventDate);
        const bdFormattedDate = moment(eventDate).utcOffset(6 * 60).format("YYYY-MM-DD HH:mm:ss");
        groupData.eventDate = bdFormattedDate;

        console.log(groupData)

        axiousSecure.post("https://eventra-server.vercel.app/events", groupData).then((result)=>{
            if(result.data.insertedId){
                swal("Event Created Successfully !", "", "success");
                navigate("/upcoming-events");
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
                onSubmit={handleCreateEvent}
                className={`backdrop-blur-lg border p-5 md:p-8 rounded-xl w-full max-w-xl shadow-2xl ${
                  isDark ? "bg-white/5 border-white/20" : "bg-white/10 border-white/50"
                }`}
              >
                <h2 className="text-2xl font-bold text-center mb-6">Create an Event</h2>
        
                <label className="block mb-2 font-medium">
                  Event Title:<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="eventTitle"
                  className="w-full p-2 mb-4 border rounded bg-transparent"
                  required
                />
        
                <label className="block mb-2 font-medium">
                  Event Type:<span className="text-red-500">*</span>
                </label>
                <select
                  name="eventType"
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
                      className="w-full p-2 border rounded bg-transparent"
                      required
                    />
                  </div>
                </div>
        
                <label className="block mb-2 font-medium">
                 Event Date:<span className="text-red-500">*</span>
                </label>


                <div className="customDatePickerWidth">
                  <DatePicker
                  selected={eventDate}
                  onChange={(date)=> setEventDate(date)}
                  minDate={new Date()}
                  placeholderText="Select Event Date"
                  className=" w-full p-2 mb-4 border rounded bg-transparent"
                  required
                />
                </div>


                {/* <input
                  type="date"
                  name="eventDate"
                  min={new Date().toISOString().split("T")[0]}
                  className="w-full p-2 mb-4 border  rounded bg-transparent"
                  required
                /> */}
        
                <label className="block mb-2 font-medium">
                 Thumbnail Image URL:<span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="ThumbPhoto"
                  className="w-full p-2 mb-4 border rounded bg-transparent"
                  required
                />
        
                <label className="block mb-2 font-medium">
                  Description:<span className="text-red-500">*</span>
                </label>
                <textarea
                  name="description"
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