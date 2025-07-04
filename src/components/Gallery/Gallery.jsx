import { use } from "react"
import { Fade } from "react-awesome-reveal"
import { AuthContext } from "../../context/AuthContext"

export const Gallery = ()=>{
  const {isDark} = use(AuthContext)
    return(
        <section className={`my-16 rounded-2xl py-16 px-6 sm:px-10 lg:px-20 ${isDark ? "bg-gradient-to-b from-[#000000] to-[#1b263b]": "bg-gradient-to-b from-white to-gray-100"}`}>
          <div className="max-w-7xl mx-auto text-center mb-12">
            <h2 className="text-2xl md:text-4xl font-semibold mb-4">
              Moments from Our <span className={`${isDark?"text-[#006d77]":"text-[#e4c1f9]"}`}>Events</span>
            </h2>
            <p className="text-lg  max-w-3xl mx-auto">
              A glimpse into the energy, passion, and community spirit captured at Eventra gatherings across neighborhoods.
            </p>
          </div>
        
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <Fade className="rounded-xl"  damping={5} direction="up">
                <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Community event 1" className="w-full rounded-xl  h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            </Fade>
            <Fade className="rounded-xl"  damping={0.1} direction="up" >
                 <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80" alt="Community event 2" className="w-full rounded-xl h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            </Fade>
            <Fade className="rounded-xl"  damping={5} direction="up">
                <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Community event 3" className="w-full rounded-xl h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            </Fade>
            <Fade className="rounded-xl"  damping={5} direction="up">
                <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80" alt="Community event 4" className="w-full rounded-xl h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            </Fade>
            <Fade className="rounded-xl"  damping={5} direction="up">
              <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80" alt="Community event 5" className="w-full rounded-xl h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            </Fade>
            <Fade className="rounded-xl"  damping={5} direction="up">
               <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="Community event 6" className="w-full rounded-xl h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            </Fade>
            <Fade className="rounded-xl"  damping={5} direction="up">
                <div className="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Community event 7" className="w-full rounded-xl h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            </Fade>
            <Fade className="rounded-xl"  damping={5} direction="up">
               <div className="overflow-hidden rounded-xl shadow-lg">
                <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Community event 8" className="w-full rounded-xl h-48 object-cover transition-transform duration-300 hover:scale-105" />
              </div>
            </Fade>
          </div>
        </section>

    )
}