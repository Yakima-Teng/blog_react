/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var SidebarCategories = React.createClass({
    render: function() {
        return (
            <li className="sidebar_three_columns">
                <h4 className="clearfix">分类和归档<span style={{float: 'right', cursor: 'pointer'}} onclick="var toggleContent=document.getElementById('toggleContent');toggleContent.style.display=(toggleContent.style.display=='none')?'block':'none';this.innerHTML=(toggleContent.style.display=='none')?'展开':'隐藏';">展开</span></h4>
                <ul id="toggleContent" className="clearfix" style={{display: 'none'}}>
                    
                </ul>
            </li>
        );
    }
});

module.exports = SidebarCategories;