/* import logo from './logo.svg'; */
/* <img src={logo} className="App-logo" alt="logo" /> */

import React,{Component} from "react";

import Header from './components/Header'
import Banner from './components/Banner'
import About from './components/About'
import Tour from './components/Tour'
import Modal from './components/Modal'
import Map from './components/Map'
import Contact from './components/Contact'
import Footer from './components/Footer'

class App extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.async = true;
    script.src = "./scripts.js";
    document.head.appendChild(script);
  }
  render() {
    return (
      <div className="App">

        <Header></Header>

        <div class="w3-content" style={{maxWidth:2000+'px',marginTop:46+'px'}}>
      
          <Banner></Banner>
          <About></About>
          <Tour></Tour>
          <Modal></Modal>
          <Contact></Contact>

        </div>

        <Map></Map>
        <Footer></Footer>

      </div>
    );
  }
}

export default App;
