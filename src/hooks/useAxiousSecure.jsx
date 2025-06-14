import axios from "axios"
import { use, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";

const axiousInstance = axios.create({
    baseURL:'https://eventra-server.vercel.app'
})

export const useAxiousSecure = ()=>{

    const {user , logOut} = use(AuthContext);
    useEffect(()=>{
    const requestInterceptor = axiousInstance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user?.accessToken}`
        return config ;
     });


    const responseInterceptor = axiousInstance.interceptors.response.use(response =>{
        return response ;
    }, error =>{
        if(error?.status === 401 || error?.status === 403){
            logOut().then(()=>{
                console.log("signout successfully")
            }).catch(error => console.log(error))
        }
        return Promise.reject(error)
    })
    return()=>{
      axiousInstance.interceptors.request.eject(requestInterceptor);
      axiousInstance.interceptors.response.eject(responseInterceptor);
    }
    },[user?.accessToken, logOut])
    
    return axiousInstance ;
}

















// import axios from "axios";
// import { useContext, useEffect } from "react";
// import { AuthContext } from "../context/AuthContext";

// const axiosSecure = axios.create({
//   baseURL: "https://eventra-server.vercel.apppp",
// });

// export const useAxiousSecure = () => {
//   const { user, logOut } = useContext(AuthContext);

//   useEffect(() => {
//     const requestInterceptor = axiosSecure.interceptors.request.use(
//       async (config) => {
//         if (user?.accessToken) {
//           config.headers.Authorization = `Bearer ${user.accessToken}`;
//         }
//         return config;
//       },
//       (error) => Promise.reject(error)
//     );

//     const responseInterceptor = axiosSecure.interceptors.response.use(
//       (response) => response,
//       async (error) => {
//         if (error?.response?.status === 401 || error?.response?.status === 403) {
//           await logOut();
//         }
//         return Promise.reject(error);
//       }
//     );

//     return () => {
//       // Clean up interceptors on unmount
//       axiosSecure.interceptors.request.eject(requestInterceptor);
//       axiosSecure.interceptors.response.eject(responseInterceptor);
//     };
//   }, [user?.accessToken, logOut]);

//   return axiosSecure;
// };

