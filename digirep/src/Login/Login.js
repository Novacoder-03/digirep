import './Login.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import log from './log.png';
import { Link ,useNavigate} from 'react-router-dom';
 export function Login(){
    const navigate = useNavigate();
    return(
        <>
        <div id ="con"class="container py-5 h-100">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-xl-10">
        <div class="card rounded-3 text-black">
          <div class="row g-0">
            <div class="col-lg-6">
              <div class="card-body p-md-5 mx-md-4">

                <div class="text-center">
                 <center> <img src={log} id="image"alt="logo"/></center>
                  
                </div>

                <form>
                  <p id="fontcolor">Please Login To Your Account</p>

                  <div class="form-outline mb-4">
                    <input type="email" id="form2Example11" class="form-control"
                      placeholder="Phone number or email address" />
                  
                  </div>

                  <div class="form-outline mb-4">
                    <input type="password" id="form2Example22" class="form-control" placeholder='password'/>
                
                  </div>

                  <div class="text-center pt-1 mb-5 pb-1">
                    <button class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={()=>{navigate("/Advisor")}}>Log
                      in as Advisor</button>
                      <button id="b2"class="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type="button" onClick={()=>{navigate("/Rep")}}>Log
                      in as Student</button>
                   
                  </div>

                  <div class="d-flex align-items-center justify-content-center pb-4">
                    <p class="mb-0 me-2">Don't have an account?</p>
                    <button type="button" class="btn btn-outline-danger"onClick={()=>{navigate('/Signup')}}>Create new</button>
                  </div>

                </form>

              </div>
            </div>
            <div class="col-lg-6 d-flex align-items-center gradient-custom-2">
              <div class="text-white px-3 py-4 p-md-5 mx-md-4">
                <h4 class="mb-4">What We Are?!</h4>
                <p class="small mb-0">The aim of our project is to create a web application that enables it's users to store, maintain and process student data and alert them of any important events and messages. 
The application allows the students to mark their attendence, know their progress and store their proofs of achievements(like certificates) so that they are portable and can be accessed anywhere at anytime. The students can also request permission for taking leave/OD(On-Duty) and get accepted/denied by the college officials. 
The teachers can also review the student's performance and send email/sms when their attendence percentage is low and asking for their reason for taking leave. The teachers can also accept/deny the students request for leave/OD(On-Duty).</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div></>
    );
 }
