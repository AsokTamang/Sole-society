import Footcompany from "./company"
import Foothelp from "./help"
import Footresources from "./resources"

export default function Footer(){
    return(
       <>
      
       <div className="foot">
        <hr/>
        <footer>
          

            <Footresources/>
          
            <Foothelp/>
        
            <Footcompany/>
        </footer>
        </div>
        </>
    )
}