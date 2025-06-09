import { use } from "react"
import { AuthContext } from "../../context/AuthContext"
import { NavLink } from "react-router"
import { FacebookIcon, Github, Instagram, Twitter } from "lucide-react"

export const Footer = ()=>{
  const {isDark , user} = use(AuthContext)
    return(
        <section className={`py-20 ${isDark ? "bg-black":"bg-white"}`}>
            <footer class="bg-gradient-to-r from-cyan-600 to-blue-600 text-white py-12 px-6 sm:px-10 lg:px-20 rounded-t-3xl shadow-lg">
  <div class="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

    
    <div class="space-y-4">
      <h3 class="text-3xl font-extrabold tracking-wide">Eventra</h3>
      <p class="text-gray-200 max-w-xs">
        Bringing communities together through powerful events and shared purpose. Join us and be the change you want to see.
      </p>
      <div class="flex space-x-4 mt-4">
        <a href="#" aria-label="Facebook" class="hover:text-gray-200 transition">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M22 12a10 10 0 10-11.63 9.87v-6.98H8v-2.9h2.37V9.36c0-2.34 1.4-3.63 3.54-3.63 1.02 0 2.08.18 2.08.18v2.3h-1.18c-1.16 0-1.52.72-1.52 1.46v1.75h2.58l-.41 2.9h-2.17v6.98A10 10 0 0022 12z"/></svg>
        </a>
        <a href="#" aria-label="Twitter" class="hover:text-gray-200 transition">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14.86A4.48 4.48 0 0022.43 2a9.05 9.05 0 01-2.87 1.1A4.52 4.52 0 0016.11 1c-2.5 0-4.52 2-4.52 4.5 0 .35.04.69.11 1A12.85 12.85 0 013 2.17a4.52 4.52 0 001.4 6.02 4.46 4.46 0 01-2.05-.57v.06c0 2.22 1.58 4.07 3.66 4.5a4.52 4.52 0 01-2.04.08 4.52 4.52 0 004.22 3.14A9 9 0 012 19.54 12.73 12.73 0 008.29 21c7.55 0 11.68-6.26 11.68-11.69 0-.18-.01-.36-.02-.54A8.35 8.35 0 0023 3z"/></svg>
        </a>
        <a href="#" aria-label="Instagram" class="hover:text-gray-200 transition">
          <svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0122 7.75v8.5A5.75 5.75 0 0116.25 22h-8.5A5.75 5.75 0 012 16.25v-8.5A5.75 5.75 0 017.75 2zm0 2A3.75 3.75 0 004 7.75v8.5A3.75 3.75 0 007.75 20h8.5a3.75 3.75 0 003.75-3.75v-8.5A3.75 3.75 0 0016.25 4h-8.5zm8.72 2.28a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
        </a>
      </div>
    </div>

    
    <div>
      <h4 class="text-xl font-semibold mb-4">Quick Links</h4>
      <ul class="space-y-3 text-gray-200">
        <li><a href="#" class="hover:underline hover:text-white transition">Home</a></li>
        <li><a href="#" class="hover:underline hover:text-white transition">Events</a></li>
        <li><a href="#" class="hover:underline hover:text-white transition">About Us</a></li>
        <li><a href="#" class="hover:underline hover:text-white transition">Blog</a></li>
        <li><a href="#" class="hover:underline hover:text-white transition">Contact</a></li>
      </ul>
    </div>

    
    <div>
      <h4 class="text-xl font-semibold mb-4">Subscribe to Our Newsletter</h4>
      <form class="flex flex-col sm:flex-row gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          class="rounded-full px-4 py-3 text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-white transition"
        />
        <button
          type="submit"
          class="bg-white text-cyan-600 font-semibold rounded-full px-6 py-3 hover:bg-gray-100 transition"
        >
          Subscribe
        </button>
      </form>
      <p class="text-sm text-gray-300 mt-3">
        No spam. Unsubscribe anytime.
      </p>
    </div>

    
    <div>
      <h4 class="text-xl font-semibold mb-4">Contact Us</h4>
      <p class="text-gray-200 mb-2">Email: support@eventra.com</p>
      <p class="text-gray-200 mb-2">Phone: +1 (555) 123-4567</p>
      <p class="text-gray-200">Address: 123 Community Lane, Cityville</p>
    </div>
  </div>

  <div class="mt-12 border-t border-cyan-400/50 pt-6 text-center text-gray-300 text-sm">
    &copy; 2025 Eventra. All rights reserved.
  </div>
</footer>

        </section>
    )
}