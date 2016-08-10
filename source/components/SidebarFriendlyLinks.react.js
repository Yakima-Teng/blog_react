/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var SidebarFriendlyLinks = React.createClass({
    render: function() {
        return (
            <li className="sidebar_multi_columns">
                <h4>Blogs</h4>
                <ul className="clearfix">
                    <li><a className="external_link" href="http://www.kun.la/" title="Search Engine Optimization">马力</a></li>
                    <li><a className="external_link" href="http://www.tipskill.com/" title="Pharamceutical person">TipSkill药学博客</a></li>
                    <li><a className="external_link" href="http://www.myblogger.pw/" title="万佳丹">万人往</a></li>
                </ul>
            </li>
        );
    }
});

module.exports = SidebarFriendlyLinks;