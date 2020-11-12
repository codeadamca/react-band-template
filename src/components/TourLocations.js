import React from "react";

function TourLocations(props) {

  function locationClick(e) {
    e.preventDefault();
    document.getElementById("ticketModal").style.display="block";
  }

  const content = props.locations.map((location) =>

    <div class="w3-third w3-margin-bottom">
      <img src={location.image} alt="New York" style={{width:100+'%'}} class="w3-hover-opacity" />
      <div class="w3-container w3-white">
        <p><b>{location.city}</b></p>
        <p class="w3-opacity">{location.date}</p>
        <p>{location.description}</p>
        <button class="w3-button w3-black w3-margin-bottom" onClick={locationClick}>Buy Tickets</button>
      </div>
    </div>

  );

  return (
    <div className="TourLocations">
      <div class="w3-row-padding w3-padding-32" style={{margin:'0 -16px'}}>
        {content}
      </div>
    </div>
  );
  
}

export default TourLocations;
