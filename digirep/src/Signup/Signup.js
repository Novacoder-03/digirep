import './Signup.css';

import { useState } from 'react';
import { Navigate } from 'react-router-dom';
export function Signup(){

    let [tologin,settologin] = useState(false);

    if(tologin){
       return (
        <Navigate to='/Login'/>
       );
       
    }

   
    return(
      <div class="vh-100 gradient-custom">
      <div class="container py-5 h-100">
      <div class="row justify-content-center align-items-center h-100">
        <div class="col-12 col-lg-9 col-xl-7">
          <div class="card shadow-2-strong card-registration" id ='con' >
            <div class="card-body p-4 p-md-5">
              <h3 class="mb-4 pb-2 pb-md-0 mb-md-5">Registration Form</h3>
              <form>
  
                <div class="row">
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <input type="text" id="firstName" class="form-control form-control-lg" placeholder='First Name' />
                  
                    </div>
  
                  </div>
                  <div class="col-md-6 mb-4">
  
                    <div class="form-outline">
                      <input type="text" id="lastName" class="form-control form-control-lg" placeholder='Lastname'/>
                      
                    </div>
  
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6 mb-4 d-flex align-items-center">
  
                    <div class="form-outline datepicker w-100">
                      <input type="text" class="form-control form-control-lg" id="birthdayDate" placeholder='Email' />
                     
                    </div>
  
                  </div>
                  <div class="col-md-6 mb-4">
  
                    <h6 class="mb-2 pb-1">Role: </h6>
  
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="femaleGender"
                        value="option1" checked />
                      <label class="form-check-label" for="femaleGender">Representative</label>
                    </div>
  
                    <div class="form-check form-check-inline">
                      <input class="form-check-input" type="radio" name="inlineRadioOptions" id="maleGender"
                        value="option2" />
                      <label class="form-check-label" for="maleGender">Advisor</label>
                    </div>
  
                    
  
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-md-6 mb-4 pb-2">
  
                    <div class="form-outline">
                      <input type="password" id="emailAddress" class="form-control form-control-lg" placeholder='Password'/>
                    
                    </div>
  
                  </div>
                  <div class="col-md-6 mb-4 pb-2">
  
                    <div class="form-outline">
                      <input type="tel" id="phoneNumber" class="form-control form-control-lg" />
                      <label class="form-label" for="phoneNumber">Phone Number</label>
                    </div>
  
                  </div>
                </div>
  
                <div class="row">
                  <div class="col-12">
  
                    {/* <select class="select form-control-lg">
                      <option value="1" disabled>Choose option</option>
                      <option value="2">Subject 1</option>
                      <option value="3">Subject 2</option>
                      <option value="4">Subject 3</option>
                    </select>
                    <label class="form-label select-label">Choose option</label> */}
  
                  </div>
                </div>
  
                <div class="mt-4 pt-2">
                  <input class="btn btn-primary btn-lg" type="submit" value="Submit" onClick={()=>{settologin(true)}}/>
                </div>
  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
    );
}