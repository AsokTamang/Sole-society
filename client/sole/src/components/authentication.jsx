import { Navigate, Outlet } from "react-router-dom"
export default function Authenticated(){
    const authentication=false
  
    if(!authentication){
        return(
            <Navigate to="signin" state={{message:'You must sign in first.'}} replace={true}/>

        )

    }  
    return<Outlet/>
    
}