/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var SidebarIntroduction = React.createClass({
    render: function() {
        return (
            <li className="sidebar_introduction">
                <ul>
                    <li><a href="/about"><i className="fa fa-male"></i> 滕运锋, Yakima Teng, 1991</a></li>
                    <li><a className="external_link" href="http://www.syphu.edu.cn/" rel="nofollow"><i className="fa fa-book"></i> 沈阳药科大学@药学(食品药学方向)专业</a></li>
                    <li><a className="external_link" href="mailto:veryplans@gmail.com"><i className="fa fa-envelope"></i> cleveryun@163.com</a></li>
                    <li><a href="http://wpa.qq.com/msgrd?v=3&amp;uin=821135564&amp;site=qq&amp;menu=yes"><i className="fa fa-qq"></i> 821135564 (验证信息：姓名+行业+博客)</a></li>
                    <li><a className="external_link" href="/books"><i className="fa fa-book"></i> 豆瓣读书主页</a></li>
                    <li><a className="external_link" href="https://github.com/Yakima-Teng"><i className="fa fa-github"></i> Github: Yakima-Teng</a></li>
                </ul>
            </li>
        );
    }
});

module.exports = SidebarIntroduction;