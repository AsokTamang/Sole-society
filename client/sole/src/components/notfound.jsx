import Header from "./header"
import Footer from "../footerfifles/totalfooter"
import { Link } from "react-router-dom"
export default function NotFound(){
    return(
        <div className="hello">
       
        <Header/>
     
       
        <h1>Sorry, the page you were looking for wasnot found.</h1>
       
        <Link className="hello1" to="/">Return to home</Link>
       
        
       
        </div>
    )
}