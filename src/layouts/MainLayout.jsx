import { Outlet, useNavigation } from "react-router"
import { Navbar } from "../components/Navbar/Navbar"
import { Footer } from "../components/Footer/Footer"
import { Loader } from "../pages/Loader/Loader";
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

export const MainLayout = ()=>{
   const {isDark} = use(AuthContext)
   const navigation = useNavigation();
   if(navigation.state === "loading"){
      return <Loader/>
   }
    return(
        <>
           <header>
              <Navbar/>
           </header>
           <main className={` ${isDark ? "bg-[#1b263b] text-white ":"bg-gray-100 text-black"}`}>
              <Outlet/>
           </main>
           <Footer>
              <Footer/>
           </Footer>
        </>
    )
}