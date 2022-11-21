import React, {Component} from "react"
import "./header.css"
import steak from '../../src/images/steak.jpg'

export default class Header extends Component{
    render(){
        return(
            <div>
                <header>
                    <div className="logo">
                        <h1>Restaurant</h1>
                    </div>
                    <div className="navbar">
                        <ul>
                            <li><a href="#welcome">WELCOME</a></li>
                            <li><a href="#about">ABOUT</a></li>
                            <li><a href="#pricing">PRICING</a></li>
                            <li><a href="#beer">BEER</a></li>
                            <li><a href="#bread">BREAD</a></li>
                            <li><a href="#featured">FEATURED</a></li>
                            <li><a href="#reservation">RESERVATION</a></li>
                            <li><a href="#contact">CONTACT</a></li>

                        </ul>

                    </div>
                </header>
                <div classname="restaurant">
                    <img src= {steak} alt="none" width="100%" height="650px" />

                    <div className="city">
                      <h1>Restaurant</h1>
                      <div>
                      <h2>"Best in the City"</h2>
                      </div>
                      
                    </div>
                </div>
            </div>
        )
    }
} 