import React,{Component} from "react";

class Contact extends Component {
  render() {
    return (
      <div className="Contact">

        <div class="w3-container w3-content w3-padding-64" style={{maxWidth:800+'px'}} id="contact">
          <h2 class="w3-wide w3-center">CONTACT</h2>
          <p class="w3-opacity w3-center"><i>Fan? Drop a note!</i></p>
          <div class="w3-row w3-padding-32">
            <div class="w3-col m6 w3-large w3-margin-bottom">
              <i class="fa fa-map-marker" style={{width:30+'px'}}></i> Chicago, US<br />
              <i class="fa fa-phone" style={{width:30+'px'}}></i> Phone: +00 151515<br />
              <i class="fa fa-envelope" style={{width:30+'px'}}> </i> Email: mail@mail.com<br />
            </div>
            <div class="w3-col m6">
              <form action="https://www.w3schools.com/action_page.php" target="_blank">
                <div class="w3-row-padding" style={{margin:'0 -16px 8px -16px'}}>
                  <div class="w3-half">
                    <input class="w3-input w3-border" type="text" placeholder="Name" required="" name="Name" />
                  </div>
                  <div class="w3-half">
                    <input class="w3-input w3-border" type="text" placeholder="Email" required="" name="Email" />
                  </div>
                </div>
                <input class="w3-input w3-border" type="text" placeholder="Message" required="" name="Message" />
                <button class="w3-button w3-black w3-section w3-right" type="submit">SEND</button>
              </form>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Contact;
