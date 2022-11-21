import React, {Component} from "react";
import "./bread.css"
import breakfast from '../../src/images/breakfast.jpg'
import bread1 from '../../src/images/bread1.jpg'
import bread2 from '../../src/images/bread1.jpg'




export default class Bread extends Component{
    render(){
        return(
            <div>
                <section className="main">
                    <div classname="bread">
                    <img src= {breakfast} alt="none" width="100%" height="600px"/>
                    <h1>Our Breakfast Menu</h1>          
                    </div>
                    <div className="baked">
                        <button>Our Bread</button>
                        <p>We love the smell of fresh baked bread. Each loaf is<br></br> handmade at the crack of dawn, using only the simplest of <br></br>ingredients to bring out smells and flavors that beckon the <br></br>whole block. Stop by anytime and experience simplicity at its<br></br> finest.</p>
                    </div>
                    <div className="fresh">
                        <table>
                            <tr>
                                <td><img src= {bread1} alt="none" width="270px" height="270px"/></td>
                                <td><img src= {bread2} alt="none" width="270px" height="270px"/></td>
                            </tr>
                        </table>

                    </div>
                </section>
            </div>
        )
    }
}