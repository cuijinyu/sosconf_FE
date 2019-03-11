import React, { Component } from 'react';
import '../themes/sponsor.css';

class Introduce extends Component {
    render() {
        return (
            <div className="sosconf-sponsor__wrapper">
                <a href="/" className="sosconf-sponsor__back">回到首页</a>
                <a href="#" className="sosconf-sponsor__more">更多</a>
                <h1 className="sosconf-sponsor__title">赞助联系</h1>
                <div className="sosconf-sponsor__span"></div>
                <h3 className="sosconf-sponsor__sub">欢迎联系sponsor@sosconf.org</h3>
                <div className="sosconf-sponsor__content">
                    <p>
                        为了把全球学生开源年会举办成为名副其实的国际会议，我们邀请来自世界各所顶级的学校、不同院系的开源技术爱好者
                        参与，从讲者到工作人员到听众绝大部分都是学生，享受开源乐趣，参与开源贡献，关于畅想未来这件事，我们学生更有
                        感觉。
                    </p>
                    <p>
                        对经济形式严峻的国家和地区的学生讲者和主持人，我们寻求提供便利，包括对学生讲者差旅费用的经济援助等。此外，
                        我们希望丰富相关活动和宴会的内容，给参会人员留下深刻的印象。会议致力于鼓励学生了解、参与、贡献开源，同时
                        也认为认同开源理念和长期参与开源项目的学生创造交流技术和分享经验的机会。因此，我们欢迎相关企业和组织提供
                        必要的赞助，以确保这次影响深远的全球学生开源年会能够取得成功。
                    </p>
                    <p>
                        赞助商将获得以下好处和机会：
                    </p>
                    <p>
                        <ul>
                            <li>
                                用行动支持开源
                            </li>
                            <li>
                                与来自世界各地顶级的教育机构和学生精英交流意见<br/>
                                可将贵公司、团体拥有的有关开源运动的经验和技能，在从事开源项目的核心开发者和全球一线的学生精英面
                                前直接展示，交流意见。
                            </li>
                            <li>
                                帮助企业挖掘有潜力的学生，提前卡位招聘优质的学生<br/>
                                全球学生开源年会的绝大部分参与者都是学生群体，其中有很多是来自世界顶级高校的学术精英和技术人才。
                                sosconf一定能帮助企业挖掘有潜力的学生，提前卡位招聘优质的人才。
                            </li>
                            <li>
                                扩大商机<br/>
                                可得知计算机的前沿领域、新趋势和最新消息，寻找扩大商机的业务领域的契机。
                            </li>
                            <li>
                                提高品牌力<br/>
                                作为致力于纯粹的全球学生开源运动的贵公司、团体，可扩大提高海外的知名度，并进一步提高其在海外市场及
                                举办地的价值和魅力。
                            </li>
                        </ul>
                    </p>
                </div>
            </div>
        );
    }
}

export default Introduce;
