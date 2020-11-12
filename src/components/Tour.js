import React,{Component} from "react";

import TourDates from './TourDates'
import TourLocations from './TourLocations'

import newyork from './images/newyork.jpg';
import paris from './images/paris.jpg';
import sanfran from './images/sanfran.jpg';

class Tour extends Component {
  render() {
    return (
      <div className="Tour">

        <div class="w3-black" id="tour">
          <div class="w3-container w3-content w3-padding-64" style={{maxWidth:800+'px'}}>
            <h2 class="w3-wide w3-center">TOUR DATES</h2>
            <p class="w3-opacity w3-center"><i>Remember to book your tickets!</i></p><br />

            <TourDates dates={dates}></TourDates>
            <TourLocations locations={locations}></TourLocations>

          </div>
        </div>

      </div>
    );
  }
}

const dates = [
  {id: 1, month: 'September', tickets: 0},
  {id: 2, month: 'October', tickets: 0},
  {id: 3, month: 'November', tickets: 3}
];

const locations = [
  {id: 1, image: newyork, city: 'New York', date: 'Fri 27 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'},
  {id: 2, image: paris, city: 'Paris', date: 'Sat 28 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'},
  {id: 3, image: sanfran, city: 'San Francisco', date: 'Sun 29 Nov 2016', description: 'Praesent tincidunt sed tellus ut rutrum sed vitae justo.'}
];

export default Tour;
