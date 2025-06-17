import { use } from "react";
import { useNavigate } from "react-router"
import { AuthContext } from "../../context/AuthContext";

export const Error = ()=>{
    const navigate = useNavigate();
    const {isDark} = use(AuthContext)
    return(
        <>
           <div className="flex flex-col justify-center items-center">
              <img src="https://i.ibb.co/7xPt3K3D/404.gif" alt="" />
              <button onClick={()=> navigate("/")} className={`btn shadow-none border-none ${isDark ?"bg-[#006d77] text-white" :"bg-[#e4c1f9] text-black"}`}>Go Back To Home</button>
           </div>
        </>
    )
}