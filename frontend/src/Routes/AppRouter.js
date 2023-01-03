import React from 'react';
import Header from './components/header';
import About from './components/about';
import Pricing from './components/pricing';
import Beer from './components/beer';
import Bread from './components/bread';
import Featured from './components/featured';
import Reservation from './components/reservation';
import Footer from './components/footer';
import Navbar from '../components/navbar';


const AppRouter = () => {
    return (
        <BrowserRouter>
        <div>
        <Navbar/>
        <Switch>
           <Route exact path='/'component = {Header} />
           <Route path ='/about' component = {About}/>
           <Route path ='/pricing' component = {Pricing}/>
           <Route path ='/beer'component = {Beer}/>
           <Route path ='/bread' component = {Bread}/>
           <Route path ='/featured' component = {Featured}/>
           <Route path ='/reservation' component ={Reservation}/>
           <Route path ='/footer' component ={Footer}/>
        
        </Switch>
        </div>
        </BrowserRouter>
    )
  }
  export default AppRouter;
  
  
  
  
  
  
  
  
  
  
  
  
  
