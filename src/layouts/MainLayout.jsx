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
           <main className={` container mx-auto px-3 md:px-6 lg:px-8 xl:px-14 ${isDark ? "bg-gray-900 text-white ":"bg-blue-50 text-black"}`}>
              <Outlet/>
           </main>
           <Footer>
              <Footer/>
           </Footer>
        </>
    )
}