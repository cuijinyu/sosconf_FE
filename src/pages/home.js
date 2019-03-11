import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../themes/home.css';

class Home extends Component { 
  static contextTypes = {
    router: PropTypes.object.isRequired,
  }
  render() {
    return (
      <div className="sosconf-home__wrap">
        <div className="sosconf-home__announcement">
          <div className="sosconf-home__title">
            <h1 className="sosconf-home__title--up">sosconf 2019</h1>
            <div className="sosconf-home__title--span"></div>
            <h2 className="sosconf-home__title--down">Students Open Source Conference</h2>
            <div className="sosconf-home__position">
              <h2 className="sosconf-home__position--time">2019年8月15日~16日</h2>
              <h2 className="sosconf-home__position--position">美国 南加州大学</h2>
            </div>
            <div className="sosconf-home__buttons">
              <button className="sosconf-home__button" onClick={() => {this.props.history.push("/sponsor");}}>
                提供赞助
              </button>
              <button className="sosconf-home__button--green">
                关于年会
              </button>
            </div>
              <div className="sosconf-home__news">
                  <div className="sosconf-home__news--container">
                      <div className="sosconf-home__news--head">最近新闻</div>
                      <div className="sosconf-home__news--more">更多新闻-></div>
                      <div className="sosconf-home__news--block"></div>
                      <h1 className="sosconf-home__news--title">第一届全球学生开源年会 (sosconf) 即将举办</h1>
                      <div className="sosconf-home__news--span"></div>
                      <div className="sosconf-home__news--summary">Students Open Source Conference (简称 sosconf), 首个由学生组织面向学生的非盈利社区全球性开源技术峰会。将于 2019年8月下旬在美国南加州大学举办</div>

                      <div className="sosconf-home__news--image"></div>
                      <div className="sosconf-home__news--hr"></div>
                      <div className="sosconf-home__news--content">
                          <p> sosconf的前身来自于2018年在重庆举办的第0届学生开源年会 (SOSCON)，从2019年第1届学生开源年会开始，sosconf成为全球学生开源会议，并计划在不同国家举办当地语言版本的学生开源年会。 峰会基于开放源代码的理念，鼓励学生享受开源、了解开源、参与开源、贡献开源，并能从开源中取得实践和乐趣。</p>
                          <p>全球学生开源年会（sosconf）致力于纯粹的技术交流和多元的思想碰撞，为学生群体建立活跃、多元、纯粹、关注学习和未来的技术社区。该会议旨在积极推动学生参与开放源代码的历史进程。因此，本次年会以将围绕着“开源”进行，从今年来作为当红炸子鸡的机器学习到用途广泛的 UI 设计，再到时下热门的
                          区块链领域。凡此种种，无一不成为参会人的技术盛宴。在来自各个高校的学生讲者和各领域的专业人士的参与下，年会将成为一个多元和友好的国际交流平台，我们鼓励学生亲临现场，交流在开源社区积累的点滴经验，分享蕴含在编码中的激情，畅聊属于开源理念的未来。</p>
                          <p>2019年，在南加州大学开源协会（SOSSC) 和中国高校的开源组织共同努力之下，sosconf 2019，即第1届全球学生开源年会将于 2019 年 8 月下旬在美国南加州大学举办，如果你对本次峰会感兴趣，请关注官方网站 http://sosconf.org 获取最新最详细的信息。</p>
                      </div>
                  </div>
              </div>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
