import { use } from "react"
import { Typewriter } from "react-simple-typewriter"
import { AuthContext } from "../../context/AuthContext"
import CountUp from "react-countup"

export const Banner = ()=>{
    const {isDark} = use(AuthContext)
    return(
        <section className="py-20">
             <div className={`grid lg:grid-cols-2 grid-cols-1  py-10 md:py-40 xl:py-40 md:px-30 px-3  gap-6  border-2  rounded-2xl ${isDark ? "bg-gradient-to-b from-[#000000] to-[#1b263b] border-none" : "bg-gradient-to-b from-gray-100 to-white border-white"}`}>
                <div className="flex flex-col justify-center items-start gap-4">
                   <h1 className="text-2xl xl:text-4xl font-medium">Empower Your {' '} 
                    <span className={`${isDark ? "text-[#006d77]" : "text-[#e4c1f9]"}`}>
                        <Typewriter
                     words={['Community', 'Network', 'Audience', 'Society']}
                     loop={Infinity}
                     delaySpeed={1000}
                     cursor
                     cursorStyle='_'
                     typeSpeed={70}
                     deleteSpeed={50}
                    />
                    </span>
                </h1>

                <p className="xl:text-lg text-base">Welcome to Eventra — your community-driven platform for social development events. Whether it’s cleanups, donations, or tree plantations, take part in local initiatives or create your own. Let's build a better tomorrow, together.</p>

                <div className="flex flex-col md:flex-row gap-4 text-sm xl:text-base font-medium mt-2">
                  <div>
                    <p className={`${isDark ? "text-white" : "text-black"}`}>🌱 <CountUp delay={0} end={1200} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="+" /> Trees Planted</p>
                  </div>
                  <div>
                    <p className={`${isDark ? "text-white" : "text-black"}`}>🧹 <CountUp delay={0} end={300} duration={5} enableScrollSpy={true} scrollSpyDelay={0} suffix="+" /> Cleanups Hosted</p>
                  </div>
                </div>

                <button className={`btn shadow-none border-none ${isDark? "bg-[#006d77] text-white": "bg-[#e4c1f9] text-black"}`}>Explore Events</button>
             </div>
             <div >
                <img  className="w-full rounded-2xl" src="https://i.ibb.co/Pzt9Yw7G/event-managers-showing-something-laptop-couple.jpg" alt="" />
             </div>
             </div>
        </section>
    )
}
