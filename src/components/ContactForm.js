import Icon from './Icon';

const  ContactForm = () => {
    const heavyIconClass = "fa-fw w3-hover-text-black w3-xlarge w3-margin-right"
    return(
        //<!-- Container (Contact Section) -->
<div className="w3-content w3-container w3-padding-64" id="contact">
  <h3 className="w3-center">WHERE I WORK</h3>
  <p className="w3-center"><em>I'd love your feedback!</em></p>

  <div className="w3-row w3-padding-32 w3-section">
    <div className="w3-col m4 w3-container">
      <img 
        src="https://www.w3schools.com/w3images/map.jpg" 
        alt="Location Map"
        className="w3-image w3-round" 
        style={{ width:"100%" }} />
    </div>
    <div className="w3-col m8 w3-panel">
      <div className="w3-large w3-margin-bottom">
        <Icon iconName="fa-map-marker" additionalClass={heavyIconClass}></Icon> Chicago, US<br/>
        <Icon iconName="fa-phone" additionalClass={heavyIconClass}></Icon> Phone: +00 151515<br/>
        <Icon iconName="fa-envelope" additionalClass={heavyIconClass}></Icon> Email: mail@mail.com<br/>
      </div>
      <p>Swing by for a cup of <Icon iconName="fa-coffee"></Icon>, or leave me a note:</p>
      <form action="/action_page.php" target="_blank">
        <div className="w3-row-padding" 
            style={{ margin:"0 -16px 8px -16px"}} >
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Name" required name="Name"/>
          </div>
          <div className="w3-half">
            <input className="w3-input w3-border" type="text" placeholder="Email" required name="Email"/>
          </div>
        </div>
        <input className="w3-input w3-border" type="text" placeholder="Message" required name="Message"/>
        <button className="w3-button w3-black w3-right w3-section" type="submit">
          <Icon iconName="fa-paper-plane"></Icon> SEND MESSAGE
        </button>
      </form>
    </div>
  </div>
</div>
    );
}

export default ContactForm;