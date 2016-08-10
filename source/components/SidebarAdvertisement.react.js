/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var SidebarAdvertisement = React.createClass({
    render: function() {
        return (
            <li className="sidebar_widget advertisement">
                <h4>广而告之</h4>
                <ul>
                    <li><img src="http://7xn7mm.com1.z0.glb.clouddn.com/advertisement.gif" /></li>
                </ul>
            </li>
        );
    }
});

module.exports = SidebarAdvertisement;