import React, { Component } from 'react';
import '../themes/header.css';

class Header extends Component { 
  render() {
    return (
      <div className="sosconf-header__wrap">
        <div className="sosconf-header__logo">
          <div className="sosconf-header__logo--svg"></div>
          <div className="sosconf-header__logo--name">sosconf</div>
          <div className="sosconf-header__logo--name-number">19</div>
        </div>
        <div className="sosconf-header__buttons">
          <button className="sosconf-header__button">首页</button>
          <button className="sosconf-header__button">年会介绍</button>
          <button className="sosconf-header__button">提供赞助</button>
          <button className="sosconf-header__button">联系方式</button>
        </div>
        <div className="sosconf-header__choose">
          
        </div>
      </div>
    );
  }
}

export default Header;
