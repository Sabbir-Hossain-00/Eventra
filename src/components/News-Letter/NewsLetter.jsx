export const NewsLetter = ()=>{
    return(
        <section class="relative w-full bg-gradient-to-br from-[#0f172a] to-[#1e293b] text-white py-16 px-6 sm:px-10 lg:px-20 overflow-hidden rounded-3xl shadow-2xl mt-16">
          <div class="max-w-4xl mx-auto text-center">
            <h2 class="text-3xl sm:text-4xl font-bold mb-4 tracking-tight">
              📬 Stay in the Loop. Lead the Change.
            </h2>
            <p class="text-base sm:text-lg text-gray-300 mb-8">
              Subscribe to Eventra updates and never miss a chance to join powerful community-driven events. Be the first to hear about local missions, inspiring stories, and real opportunities to lead change.
            </p>
        
            <form class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input
                type="email"
                placeholder="Your awesome email"
                class="w-full sm:w-auto px-6 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-4 focus:ring-cyan-400 transition"
              />
              <button
                type="submit"
                class="bg-cyan-500 hover:bg-cyan-600 transition text-white font-semibold px-8 py-3 rounded-full shadow-lg"
              >
                Subscribe Now
              </button>
            </form>
        
            <p class="text-sm text-gray-400 mt-4">
              No spam, just impact. Unsubscribe anytime.
            </p>
          </div>
        
        
          <div class="absolute top-4 right-6 opacity-20 text-7xl">
            🚀
          </div>
        </section>

    )
}