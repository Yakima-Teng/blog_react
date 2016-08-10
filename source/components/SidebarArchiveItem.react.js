/**
 * Created by Administrator on 4/10.
 */
var React = require('react');
var RecentPost = require('./RecentPost.react');

var SidebarArchiveItem = React.createClass({
    render: function() {
        var item = this.props.item;
        return (
            <li>
                <a href={'/blog/archives/' + item['ID'] + '.html'}>{item['post_title']}</a>
            </li>
        );
    }
});

module.exports = SidebarArchiveItem;