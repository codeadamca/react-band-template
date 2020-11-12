import React,{Component} from "react";

import AboutList from './AboutList'

import bandmember from './images/bandmember.jpg';

class About extends Component {
  render() {
    return (
      <div className="About">

        <div class="w3-container w3-content w3-center w3-padding-64" style={{maxWidth:800+'px'}} id="band">

          <h2 class="w3-wide">THE BAND</h2>
          <p class="w3-opacity"><i>We love music</i></p>
          <p class="w3-justify">We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
            ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

          <div class="w3-row w3-padding-32">
            <AboutList members={members}></AboutList>
          </div>
          
        </div>

      </div>
    );
  }
}

const members = [
  {id: 1, name: 'Name', image: bandmember},
  {id: 2, name: 'Name', image: bandmember},
  {id: 3, name: 'Name', image: bandmember}
];

export default About;
