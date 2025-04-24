import React from "react";
import Header from "./header";
import { Navigate,Outlet,replace,useLocation,useNavigate} from "react-router-dom";
export default function Signin(){
    const navigate=useNavigate();
    const location=useLocation();  //here useLocation() is used for retrieving the state passed into this path from the Navigate link from the authentication page.
    console.log(location)
   const [formdata,setformdata]=React.useState({'email':'','password':''})  //here we are setting the state for name and and password value.
    function handlesubmit(e){
        e.preventDefault();
        navigate('/findstore', {replace:true})
        
    }
    function handlechange(e){
        const{name,value}=e.target
        setformdata(prevstate=>({...prevstate,[name]:value}))

    }
    return(
        <>
            <Header/>

           
            <div className="Form">
            {location.state?.message && <h1 style={{color:'red'}}>{location.state.message}</h1>}    
           <h1>SIGN INTO YOUR ACCOUNT</h1>
            <form onSubmit={handlesubmit}>
                <input
                name="email"
                value={formdata.email}
                placeholder="Email"
                onChange={handlechange}
                required
                />
                <br/>
                <input
                name="password"
                value={formdata.password}
                placeholder="Password"
                onChange={handlechange}
                required
                />
                <br/>
                <button>Login</button>

            </form>

        </div>
        </>
    )
}