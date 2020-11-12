import React,{Component} from "react";

class Header extends Component {
  render() {
    return (
      <div className="Header">

        <div class="w3-top">
          <div class="w3-bar w3-black w3-card">
            <a class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right" href="javascript:void(0)" onclick="myFunction()" title="Toggle Navigation Menu"><i class="fa fa-bars"></i></a>
            <a href="#" class="w3-bar-item w3-button w3-padding-large">HOME</a>
            <a href="#band" class="w3-bar-item w3-button w3-padding-large w3-hide-small">BAND</a>
            <a href="#tour" class="w3-bar-item w3-button w3-padding-large w3-hide-small">TOUR</a>
            <a href="#contact" class="w3-bar-item w3-button w3-padding-large w3-hide-small">CONTACT</a>
            <div class="w3-dropdown-hover w3-hide-small">
              <button class="w3-padding-large w3-button" title="More">MORE <i class="fa fa-caret-down"></i></button>     
              <div class="w3-dropdown-content w3-bar-block w3-card-4">
                <a href="#" class="w3-bar-item w3-button">Merchandise</a>
                <a href="#" class="w3-bar-item w3-button">Extras</a>
                <a href="#" class="w3-bar-item w3-button">Media</a>
              </div>
            </div>
            <a href="javascript:void(0)" class="w3-padding-large w3-hover-red w3-hide-small w3-right"><i class="fa fa-search"></i></a>
          </div>
        </div>
  
        <div id="navDemo" class="w3-bar-block w3-black w3-hide w3-hide-large w3-hide-medium w3-top" style={{marginTop:46+'px'}}>
          <a href="https://www.w3schools.com/w3css/tryw3css_templates_band.htm#band" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">BAND</a>
          <a href="https://www.w3schools.com/w3css/tryw3css_templates_band.htm#tour" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">TOUR</a>
          <a href="https://www.w3schools.com/w3css/tryw3css_templates_band.htm#contact" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">CONTACT</a>
          <a href="https://www.w3schools.com/w3css/tryw3css_templates_band.htm#" class="w3-bar-item w3-button w3-padding-large" onclick="myFunction()">MERCH</a>
        </div>

      </div>
    );
  }
}

export default Header;
