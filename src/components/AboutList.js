import React from "react";

function AboutList(props) {

  const content = props.members.map((member) =>
    <div class="w3-third">
      <p>{member.name}}</p>
      <img src={member.image} class="w3-round w3-margin-bottom" alt="Random Name" style={{width:60+'%'}} />
    </div>
  );

  return (
    <div className="AboutList">
      {content}
    </div>
  );
  
}

export default AboutList;
