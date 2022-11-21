import React, {Component} from "react";
import "./pricing.css"
import afford from '../../src/images/pricing.jpg'
import food1 from '../../src/images/food_icon01.jpg'
import food2 from '../../src/images/food_icon02.jpg'
import food3 from '../../src/images/food_icon03.jpg'
import food4 from '../../src/images/food_icon04.jpg'
import food5 from '../../src/images/food_icon05.jpg'
import food6 from '../../src/images/food_icon06.jpg'
import food7 from '../../src/images/food_icon07.jpg'
import food8 from '../../src/images/food_icon08.jpg'


export default class pricing extends Component{
    render(){
        return(
            <div>
                <section className="affordable">
                    <div className="pricing">
                        
                        <img src= {afford} alt="none" width="100%" height="600px"/>
                        <h1>Affordable Pricing</h1>
                    </div>
                    <div className="all">
                        <ul>
                            <li>All</li>
                            <li>Breakfast</li>
                            <li>Special</li>
                            <li>Desert</li>
                            <li>Dinner</li>
                            
                        </ul>
                        <div className="menu">
                            <table>
                                <tr>
                                    <td><img src= {food1} alt="none" width="250px" height="220px"/><h2>$20</h2></td>
                                    <td><img src= {food2} alt="none" width="250px" height="220px"/><h2>$20</h2></td>
                                    <td><img src= {food3} alt="none" width="250px" height="220px"/><h2>$18</h2></td>
                                    <td><img src= {food4} alt="none" width="250px" height="220px"/><h2>$15</h2></td>
                                </tr>
                                <tr>
                                    <td><img src= {food5} alt="none" width="250px" height="220px"/><h2>$20</h2></td>
                                    <td><img src= {food6} alt="none" width="250px" height="220px"/><h2>$22</h2></td>
                                    <td><img src= {food7} alt="none" width="250px" height="220px"/><h2>$32</h2></td>
                                    <td><img src= {food8} alt="none" width="250px" height="220px"/><h2>$38</h2></td>

                                </tr>
                            </table>
                        
                        
                        </div>

                    </div>
                    
                </section>
            </div>
        )
    }
}
