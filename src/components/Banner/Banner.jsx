import { Typewriter } from "react-simple-typewriter"

export const Banner = ()=>{
    return(
        <section className="py-20">
             <div className=" grid lg:grid-cols-2 grid-cols-1  py-10 md:py-40 xl:py-40 md:px-30 px-3  gap-6  border-2 border-white rounded-2xl bg-gradient-to-b from-gray-100 to-white">
             <div>
                <div className="flex flex-col justify-center items-start gap-4">
                   <h1 className="text-2xl xl:text-4xl font-medium">Empower Your {' '} 
                    <span className="text-[#e4c1f9]">
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
                <p className="xl:text-lg text-base">Connect With Your Community Through Service & Events That Inspire Growth, Build Unity, and Drive Meaningful Change in the World Around You.</p>
                <button className="btn bg-[#e4c1f9]">Explore Events</button>
             </div>
             </div>
             <div >
                <img  className="w-full rounded-2xl" src="https://i.ibb.co/Pzt9Yw7G/event-managers-showing-something-laptop-couple.jpg" alt="" />
             </div>
             </div>
        </section>
    )
}




{/*              <h1 className="text-3xl font-medium">Empower Your {' '} 
                    <span className="text-fuchsia-400">
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
                <p>Connect With Your Community Through Service & Events That Inspire Growth, Build Unity, and Drive Meaningful Change in the World Around You.</p>
                <button className="btn bg-fuchsia-300">Explore Events</button> */}