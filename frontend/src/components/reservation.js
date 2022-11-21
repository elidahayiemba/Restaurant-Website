import React,{Component} from "react";
import "./reservation.css"
import featured from '../../src/images/featured.jpg'



export default class Reservation extends Component{
    render(){
        return(
            <div>
                <section className="reservation">
                <img src= {featured} alt="none" width="100%" height="600px"/>
                <h1>Reserve a Table</h1>
                <div className="form">
                    <form>
                        <input type="text" name="first_name" id="first_name" required="required" class="form" placeholder="First Name" />
                        <input type="text" name="last_name" id="last_name" required="required" class="form" placeholder="Last Name" />
                        <input type="text" name="city" id="city" required="required" class="form" placeholder="City" />
                        <input type="text" name="datepicker" id="datepicker" required="required" class="form" placeholder="Reservation Date" />
                
                 <div className="form2">   
                        <input type="text" name="phone" id="phone" required="required" class="form" placeholder="Phone" />
                        <input type="text" name="guest" id="guest" required="required" class="form" placeholder="Guest Number" />
                        <input type="email" name="email" id="email" required="required" class="form" placeholder="Email" />
                        <input type="text" name="subject" id="subject" required="required" class="form" placeholder="Subject" />
                    
                   <div className="submit">                
                       <button type="submit" id="submit" name="submit" class="text-center form-btn form-btn">Reserve</button> 
                    </div>
                </div>
                       
                    </form>

                </div>
                <div className="operating">
            
                    <h2>Hours</h2><hr></hr>
                    <p>Monday to Friday: 7:30 AM - 11:30 AM</p><hr></hr>
                    <p>Saturday & Sunday: 8:00 AM - 9:00 AM</p><hr></hr>
                    <p>Monday to Friday: 12:00 PM - 5:00 PM</p><hr></hr>
                    <p>Monday to Saturday: 6:00 PM - 1:00 AM</p><hr></hr>
                    <p>Sunday to Monday: 5:30 PM - 12:00 AM</p><hr></hr>
                                        
                </div>
            </section>
            </div>
        )
    }
}