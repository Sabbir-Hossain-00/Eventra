import { ArrowUpRight } from "lucide-react"

export const Gallery = ()=>{
    return(
        <section class="py-16 px-6 sm:px-10 lg:px-20 bg-gray-50 dark:bg-gray-900">
          <div class="max-w-7xl mx-auto text-center mb-12">
            <h2 class="text-4xl font-extrabold text-gray-900 dark:text-white mb-4">
              Moments from Our Events
            </h2>
            <p class="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              A glimpse into the energy, passion, and community spirit captured at Eventra gatherings across neighborhoods.
            </p>
          </div>
        
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            <div class="overflow-hidden rounded-xl shadow-lg cursor-pointer">
              <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80" alt="Community event 1" class="w-full  h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1497493292307-31c376b6e479?auto=format&fit=crop&w=800&q=80" alt="Community event 2" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Community event 3" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1470770903676-69b98201ea1c?auto=format&fit=crop&w=800&q=80" alt="Community event 4" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1531058020387-3be344556be6?auto=format&fit=crop&w=800&q=80" alt="Community event 5" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1543269865-cbf427effbad?auto=format&fit=crop&w=800&q=80" alt="Community event 6" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80" alt="Community event 7" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
            <div class="overflow-hidden rounded-xl shadow-lg">
              <img src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80" alt="Community event 8" class="w-full h-48 object-cover transition-transform duration-300 hover:scale-105" />
            </div>
          </div>
        </section>

    )
}