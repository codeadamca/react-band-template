import React from "react";

function TourDates(props) {

  const content = props.dates.map((date) =>
    <li class="w3-padding">{date.month} 
      {date.tickets == 0
        ? <span class="w3-tag w3-red w3-margin-left">Sold out</span>
        : <span class="w3-badge w3-right w3-margin-right">{date.tickets}</span>
      }
    </li>
  );

  return (
    <div className="TourDates">
      <ul class="w3-ul w3-border w3-white w3-text-grey">
        {content}
      </ul>
    </div>
  );
  
}

export default TourDates;
