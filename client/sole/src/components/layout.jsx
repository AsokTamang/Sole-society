import Header from "./header";
import Footer from "../footerfifles/totalfooter";
import { Outlet } from "react-router-dom";      //this is the property of reactrouter that helps to put the Layout component to the children routes or urls
export default function Layout(){
    return(
        <> 
        <Header/>
        <Outlet/>
        <Footer/>
        
        </>
    )
}