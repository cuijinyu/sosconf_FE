import React, { Component } from 'react';
import '../themes/home.css';

class Home extends Component { 
  render() {
    return (
      <div className="sosconf-home__wrap">
        <div className="sosconf-home__title">
          <h1 className="sosconf-home__title--up">sosconf 2019</h1>
          <div className="sosconf-home__title--span"></div>
          <h2 className="sosconf-home__title--down">Students Open Source Conference</h2>
          <div className="sosconf-home__position">
            <h2 className="sosconf-home__position--time">2019年8月15日~16日</h2>
            <h2 className="sosconf-home__position--position">美国 南加州大学</h2>
          </div>
          <div className="sosconf-home__buttons">
            <button className="sosconf-home__button">
              提供赞助
            </button>
            <button className="sosconf-home__button--green">
              关于年会
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
