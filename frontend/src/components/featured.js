import React, {Component} from "react";
import "./featured.css"
import featured from '../../src/images/featured.jpg'
import slider1 from '../../src/images/slider1.jpg'
import slider2 from '../../src/images/slider2.jpg'
import slider3 from '../../src/images/slider3.jpg'



export default class Featured extends Component{
    render(){
        return(
            <div>
                <section className="featured">
                <img src= {featured} alt="none" width="100%" height="600px"/>
                <h1>Our Featured Menu</h1>

                <div className="dishes">
                    <button>Have A Look<br></br>To Our<br></br>Dishes</button>
                    <p>Each food is handmade at the crack of dawn, using only the<br></br> simplest of ingredients to bring out smells and flavors that<br></br> beckon the whole block. Stop by anytime and experience<br></br> simplicity at its finest.</p>

                </div>
                <div>
                  <div class="carousel">
                    <ul class="slides">
                     <input type="radio" name="radio-buttons" id="img-1" checked />
                     <li class="slide-container">
                     <div class="slide-image">
                     <img src= {slider1} alt="none" width="100%" height=""/>
                    </div>
                   <div class="carousel-controls">
                    <label for="img-3" class="prev-slide">
                    <span>&lsaquo;</span>
                   </label>
                  <label for="img-2" class="next-slide">
                  <span>&rsaquo;</span>
                  </label>
                 </div>
                </li>
                <input type="radio" name="radio-buttons" id="img-2" />
                <li class="slide-container">
               <div class="slide-image">
               <img src= {slider2} alt="none" width="100%" height=""/>
              </div>
              <div class="carousel-controls">
              <label for="img-1" class="prev-slide">
              <span>&lsaquo;</span>
              </label>
             <label for="img-3" class="next-slide">
              <span>&rsaquo;</span>
              </label>
             </div>
              </li>
            <input type="radio" name="radio-buttons" id="img-3" />
            <li class="slide-container">
            <div class="slide-image">
            <img src= {slider3} alt="none" width="100%" height=""/>
            </div>
            <div class="carousel-controls">
            <label for="img-2" class="prev-slide">
            <span>&lsaquo;</span>
            </label>
            <label for="img-1" class="next-slide">
            <span>&rsaquo;</span>
            </label>
            </div>
            </li>
            <div class="carousel-dots">
            <label for="img-1" class="carousel-dot" id="img-dot-1"></label>
            <label for="img-2" class="carousel-dot" id="img-dot-2"></label>
            <label for="img-3" class="carousel-dot" id="img-dot-3"></label>
            </div>
            </ul>
           </div>
          </div>


      </section>
    </div>
        )
    }
}