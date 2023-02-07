//style
// import './App.css';
//components
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Navbar from './components/navbar/Navbar';
import Report from './components/report/Report';
import Solution from './components/section/Solution';
import Best from './components/thebest/Best';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Solution/>
      <Report/>
      <Best/>
      <Footer/>
    </div>
  );
}

export default App;
