import Hero from "./components/Hero";
import Nav from "./components/Nav";
import Hero2 from './components/Hero2'
import Footer from "./components/Footer";

function App() {

  // const newHr = {
    
  //   marginTop: '-4.5rem'
  //   }

  return (

    <div className="App">
      <Nav />
      <div className="jumbotron main-image height">
        img goes here
      </div>
      <div className="container">
      <Hero />
      <hr/>
      <Hero2 />
      {/* <hr style={newHr} /> */}
      </div>
      <Footer/>

    </div>
  );
}

export default App;
