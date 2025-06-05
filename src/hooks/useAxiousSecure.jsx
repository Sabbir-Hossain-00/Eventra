import axios from "axios"
import { use } from "react";
import { AuthContext } from "../context/AuthContext";

const axiousInstance = axios.create({
    baseURL:'http://localhost:3000'
})
export const useAxiousSecure = ()=>{

    const {user , logOut} = use(AuthContext);

    axiousInstance.interceptors.request.use(config =>{
        config.headers.authorization = `Bearer ${user.accessToken}`
        return config ;
    });


    axiousInstance.interceptors.response.use(response =>{
        return response ;
    }, error =>{
        if(error.status === 401 || error.status === 403){
            logOut().then(()=>{
                console.log("signout successfully")
            }).catch(error => console.log(error))
        }
        return Promise.reject(error)
    })
    
    return axiousInstance ;
}