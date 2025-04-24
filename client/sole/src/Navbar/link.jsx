import {NavLink} from "react-router-dom"
export default function Nav(){
    const style={
        color:'red',
        fontWeight:'bold',
        textDecoration:'underline'
    }
   return( 
    <nav>
        <NavLink style={({isActive})=>( isActive? style:null)} to="/">Home</NavLink>
        <NavLink style={({isActive})=>(isActive?style:null)} to="/about">About us</NavLink>
        <NavLink style={({isActive})=>( isActive? style:null)} to="/help">Help</NavLink>
        <NavLink style={({isActive})=>( isActive? style:null)} to="/signin">Sign In</NavLink>
        <NavLink style={({isActive})=>( isActive? style:null)} to="/findstore">Find a Store</NavLink>
       
    </nav>)

}