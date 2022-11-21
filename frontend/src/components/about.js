import React, {Component} from "react";
import "./about.css"
import kabob from '../../src/images/kabob.jpg'
import limes from '../../src/images/limes.jpg'
import radish from '../../src/images/radish.jpg'
import corn from '../../src/images/corn.jpg'

export default class About extends Component{
    render(){
        return(
            <div>
                <section className="aboutus">
                <div className="about">
                    <button>About Us</button>
                    <p>Restaurant  is  a  place  for simplicity. Good food, good beer,<br></br> and good service. Simple is the name of the game, and<br></br> we’re good at finding it in all the right places, even in your<br></br> dining experience. We’re a small group from Kisumu,<br></br> Kenya who make simple food possible. Come join us and<br></br> see what simplicity tastes like.</p>

                    <div className="food">
                        <table>
                            <tr>
                                <td><img src= {kabob} alt="none" width="250px" height="220px"/></td>
                                <td><img src= {limes} alt="none" width="250px" height="220px"/></td>
                            </tr>
                            <tr>
                                <td><img src= {radish} alt="none" width="250px" height="220px"/></td>
                                <td><img src= {corn} alt="none" width="250px" height="220px"/></td>
                            </tr>
                        </table>

                    </div>
                

                </div>
                </section>
            </div>
        )
    }
}