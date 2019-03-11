import React, { Component } from 'react';
import '../themes/header.css';

class Header extends Component { 
  render() {
    return (
      <div className="sosconf-header__wrap">
        <div className="sosconf-header-pc">
          <div className="sosconf-header__logo">
            <div className="sosconf-header__logo--svg"></div>
            <div className="sosconf-header__logo--name">sosconf</div>
            <div className="sosconf-header__logo--name-number">19</div>
          </div>
          <div className="sosconf-header__buttons">
            <button className="sosconf-header__button">首页</button>
            <div className="sosconf-header__button-group sosconf-header__button-group--about">             
              <button className="sosconf-header__group-button-title" id="sosconf-header__button--about">关于</button>
              <div className="sosconf-header__gourp-drop-down">
                <button className="sosconf-header__group-button">关于年会</button>
                <button className="sosconf-header__group-button">工作人员名单</button>
              </div>
            </div>
            <button className="sosconf-header__button">赞助</button>
            {/* 无 */}
            <button className="sosconf-header__button">议程</button>
            <button className="sosconf-header__button">导航</button>
            <div className="sosconf-header__button-group sosconf-header__button-group--about">             
              <button className="sosconf-header__group-button-title" id="sosconf-header__button--contact">联系</button>
              <div className="sosconf-header__gourp-drop-down">
                <button className="sosconf-header__group-button">赞助联系</button>
                <button className="sosconf-header__group-button">讲者联系</button>
                <button className="sosconf-header__group-button">志愿者联系</button>
              </div>
            </div>
          </div>
          <div className="sosconf-header__choose">
            
          </div>
        </div>

        <div className="sosconf-header-mobile">
          <div className="sosconf-header-mobile__logo">
          </div>
          <div className="sosconf-header__logo--name">sosconf</div>
          <div className="sosconf-header__logo--name-number">19</div>
        </div>
      </div>
    );
  }
}

export default Header;
