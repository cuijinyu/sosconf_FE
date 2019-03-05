import React, { Component } from 'react';
import '../themes/footer.css';

class Footer extends Component { 
  render() {
    return (
      <div className="sosconf-footer__wrap">
        <div className="sosconf-footer__logo-wrap">
            <div className="sosconf-footer__left-logo">
            </div>
        </div>
        <div className="sosconf-footer__middle-buttons">
            <button className="sosconf-footer__middle-button sosconf-footer__middle-button--openingsource"></button>
            <button className="sosconf-footer__middle-button sosconf-footer__middle-mail"></button>
            <button className="sosconf-footer__middle-button sosconf-footer__middle-facebook"></button>
            <button className="sosconf-footer__middle-button sosconf-footer__middle-twitter"> </button>
            <button className="sosconf-footer__middle-button sosconf-footer__middle-flickr"></button>
            <button className="sosconf-footer__middle-button sosconf-footer__middle-youtube"></button>
            <button className="sosconf-footer__middle-button sosconf-footer__middle-weibo"></button>
        </div>
        <div className="sosconf-footer__copyleft">
          <p>Copyleft @ openingsource.org</p>
        </div>
      </div>
    );
  }
}

export default Footer;
