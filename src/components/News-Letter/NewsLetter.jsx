export const NewsLetter = ()=>{
    return(
        <section className="pb-20">
          <div className=" w-full bg-white border-2 border-fuchsia-100 py-16 px-6 sm:px-10 lg:px-20 overflow-hidden rounded-3xl ">
             <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-2xl sm:text-4xl font-semibold mb-4 tracking-tight">
               Stay in the Loop. Lead the Change.
            </h2>
            <p className="text-base sm:text-lg  mb-8">
              Subscribe to Eventra updates and never miss a chance to join powerful community-driven events. Be the first to hear about local missions, inspiring stories, and real opportunities to lead change.
            </p>
        
            <form className="flex flex-col sm:flex-row items-center justify-center">
              <input
                type="email"
                placeholder="Your awesome email"
                className="w-full sm:w-auto pl-4 pr-20 py-3 rounded-tl-full rounded-bl-full bg-fuchsia-50"
              />
              <button
                type="submit"
                className="bg-[#e4c1f9] transition  font-semibold px-6 py-3 rounded-tr-full rounded-br-full  shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
        
            <p className="text-sm  mt-4">
              No spam, just impact. Unsubscribe anytime.
            </p>
          </div>
          </div>
        </section>

    )
}