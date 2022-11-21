import React, {Component} from "react";
import "./beer.css"
import beer from '../../src/images/beer.jpg'
import beer1 from '../../src/images/beer_spec.jpg'



export default class Beer extends Component{
    render(){
        return(
            <div>
                <section className="great">
                    <div className="beer">
                    <img src= {beer} alt="none" width="100%" height="600px"/>
                    <h1>Great Place to Enjoy</h1>
                   </div>
                   <div className="drink">
                   <img src= {beer1} alt="none" width="" height="400px"/>
                   <div classname="party">
                   <button>Our Beer</button>
                   <p>Here at Restaurant we’re all about the love of beer. New and<br></br> bold flavors enter our doors every week, and we can’t help<br></br> but show them off. While we enjoy the classics, we’re always<br></br> passionate about discovering something new, so stop by and<br></br> experience our craft at its best.</p>
                    </div>

                   </div>
                </section>
            </div>
        )
    }
}