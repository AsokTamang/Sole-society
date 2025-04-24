import { SiNewbalance } from "react-icons/si";
import { Outlet } from "react-router-dom";         //this is the property of reactrouter that helps to put the Header component to the children routes or urls
import Nav from "../Navbar/link";
export default function Header(){
    return(
        <>
        <header>
            <SiNewbalance className="symbol"/>
            <Nav/>
        </header>
            
        </>
    )
}