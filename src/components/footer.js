import React, { Component } from 'react';
import '../themes/footer.css';

class Footer extends Component { 
  render() {
    return (
      <div className="sosconf-footer__wrap">
        <div className="sosconf-footer__left-logo">
        </div>
        <div className="sosconf-footer__middle-buttons">
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
            <a></a>
        </div>
        <div className="sosconf-footer__copyleft">
          <p>Copyleft @ openingsource.org</p>
        </div>
      </div>
    );
  }
}

export default Footer;
