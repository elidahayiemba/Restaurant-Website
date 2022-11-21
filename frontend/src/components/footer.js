import React, {Component} from "react";
import './footer.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faGithub,
    faFacebook,
    faTwitter,
    faInstagram
  } from "@fortawesome/free-brands-svg-icons";



export default class Footer extends Component{
    render(){
        return(
            <div>
                <section>
                    <footer>
                    <div className="lakehub">
                
                    </div>
                  
                  <div className="game">
                    
                    <p>The fabric of Cutlets was born out of love and<br></br> respect for these humble deli creations, met with a <br></br>desire to bring quality ingredients to the table. Simply<br></br> put, we’re here to bring you a food experience you <br></br>can feel good about.
                    </p>
                    </div>

                    <hr></hr>
                    
                    <div className="game2">
                     
                     <p>© Copyright 2022 Elidah Ayiemba. All rights reserved.</p>
                    <div className="Social">
                    <a href="https://github.com/elidahayiemba"
                    className="github social">
                    <FontAwesomeIcon icon={faGithub} size="2x" />
                    </a>
                    <a href="https://www.facebook.com/eddy.capron.77"
                    className="facebook social">
                    <FontAwesomeIcon icon={faFacebook} size="2x" />
                    </a>
                    <a href="https://twitter.com/ayiemba_elidah" className="twitter social">
                    <FontAwesomeIcon icon={faTwitter} size="2x" />
                    </a>
                    <a href="https://www.instagram.com/ayiemba_elidah/"
                    className="instagram social">
                    <FontAwesomeIcon icon={faInstagram} size="2x" />
                    </a>
                    </div>
                    </div>
                  
            

            

                    </footer>
                    
                </section>
            </div>
        )
    }
}