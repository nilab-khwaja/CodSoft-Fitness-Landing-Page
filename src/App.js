import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import Reservation from "./Components/Reservation";
import Services from "./Components/services";

function App() {
  return (
    <div className="App">
       <Header/>
       <main>
          <Hero/>
          <About/>
          <Services/>
          <Reservation/>
          <Footer/>
       </main>
    </div>
  );
}

export default App;
