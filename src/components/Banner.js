import React,{Component} from "react";

import la from './images/la.jpg';
import ny from './images/ny.jpg';
import chicago from './images/chicago.jpg';

class Banner extends Component {
  render() {
    return (
      <div className="Banner">

        <div class="mySlides w3-display-container w3-center" style={{display:'none'}}>
          <img src={la} style={{width:100+'%'}} />
          <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Los Angeles</h3>
            <p><b>We had the best time playing at Venice Beach!</b></p>   
          </div>
        </div>
        <div class="mySlides w3-display-container w3-center" style={{display:'none'}}>
          <img src={ny} style={{width:100+'%'}} />
          <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>New York</h3>
            <p><b>The atmosphere in New York is lorem ipsum.</b></p>    
          </div>
        </div>
        <div class="mySlides w3-display-container w3-center" style={{display:'block'}}>
          <img src={chicago} style={{width:100+'%'}} />
          <div class="w3-display-bottommiddle w3-container w3-text-white w3-padding-32 w3-hide-small">
            <h3>Chicago</h3>
            <p><b>Thank you, Chicago - A night we won't forget.</b></p>    
          </div>
        </div>

      </div>
    );
  }
}

export default Banner;
