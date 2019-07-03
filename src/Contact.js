import React, { Component } from 'react';
// import helpers from './helpers.js';
import './Contact.css';

class Contact extends Component {

  render() {
    return(
      <div id="mc_embed_signup">
        <form action="https://gmail.us3.list-manage.com/subscribe/post?u=d1dec8556657c4936cc0ce702&amp;id=c30c13d2dc" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="validate" target="_blank" noValidate>
          <div id="mc_embed_signup_scroll">
            <div className="mc-field-group">
              <input type="email" name="EMAIL" className="required email" id="mce-EMAIL" placeholder="your@email.com"/>
            </div>
            <div className="mc-field-group">
              <input type="text" name="NAME" className="required" id="mce-NAME" placeholder="Name"/>
            </div>
            <div className="mc-field-group">
              <input type="text" name="MESSAGE" className="required" id="mce-MESSAGE" placeholder="Message"/>
            </div>

              {/* hidden error responses */}
              <div id="mce-responses" className="clear">
                <div className="response" id="mce-error-response"></div>
                <div className="response" id="mce-success-response"></div>
              </div>    

              {/* <!-- real people should not fill this in and expect good things - do not remove this or risk form bot signups--> */}
              <div className="bottom-div" aria-hidden="true"><input type="text" name="b_d1dec8556657c4936cc0ce702_c30c13d2dc" tabIndex="-1" /></div>
              <div className="clear"><input type="submit" value="Subscribe" name="subscribe" id="mc-embedded-subscribe" className="button" /></div>
            </div>
        </form>
      </div>
    )
  }
}

export default Contact;
