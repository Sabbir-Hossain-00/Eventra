import { Link } from "react-router"

export const EmptyJoinedEvent = ()=>{
    return(
        <section className="flex flex-col justify-center items-center min-h-screen gap-4 p-3">
            <h1 className="md:text-3xl text-2xl font-medium text-[#d79ef8] text-center">You haven't joined any event yet</h1>
            <p className="text-lg font-medium">please join an event </p>
            <Link to="/upcoming-events" className="btn bg-[#e4c1f9]">Join Now</Link>
        </section>
    )
}