import './Advisor.css';
import {Link} from "react-router-dom";
import {FaHome} from "react-icons/fa";
import { FaList} from "react-icons/fa";
import {FaMale} from "react-icons/fa";


export function Advisor(){
    return(
        <>
         
        <nav>
            <Link to="/testcomponent">< FaHome /></Link>
            <a href="#second"><  FaList/></a>
            <a href="#third"><FaMale/></a>
        
        </nav>
       
        {/* <div class='container'>
        
                <section id='first'>
                <div id="nav"></div>
                   < testcomponentt/>
                </section>

                <section id='second'>
                <div id="nav"></div>
                    <h1>Second</h1>
                </section>

                <section id='third'>
                <div id="nav"></div>
                    <h1>Third</h1>
                </section>

                
            </div></> */}
            </>
    );
}
