
import './App.css';
import Header from './components/header';
import About from './components/about';
import Pricing from './components/pricing';
import Beer from './components/beer';
import Bread from './components/bread';
import Featured from './components/featured';
import Reservation from './components/reservation';
import Footer from './components/footer';


function App() {
  return (
    <div className="App">
      <Header/>
      <About/>
      <Pricing/>
      <Beer/>
      <Bread/>
      <Featured/>
      <Reservation/>
      <Footer/>

      
    </div>
  );
}

export default App;
