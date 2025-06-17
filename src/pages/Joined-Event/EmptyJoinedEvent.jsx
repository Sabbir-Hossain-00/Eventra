import { use } from "react"
import { Link } from "react-router"
import { AuthContext } from "../../context/AuthContext"

export const EmptyJoinedEvent = ()=>{
    const {isDark} = use(AuthContext)
    return(
        <section className="flex flex-col justify-center items-center min-h-screen gap-4 p-3">
            <h1 className={`md:text-3xl text-2xl font-medium  text-center ${isDark ? "text-[#006d77]":"text-[#d79ef8]"}`}>You haven't joined any event yet</h1>
            <p className="text-lg font-medium">please join an event </p>
            <Link to="/upcoming-events" className={`btn w-full shadow-none border-none ${isDark? "bg-[#006d77] text-white": "bg-[#e4c1f9] text-black"}`}>Join Now</Link>
        </section>
    )
}