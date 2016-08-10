/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var FooterItem = React.createClass({
    render: function() {
        var item = this.props.item;
        if (item.post_title) {
            return (
                <li><a href={'/blog/page/' + item.post_name}>{item.post_title}</a></li>
            );
        } else if (item.name) {
            return (
                <li><a href={'/blog/categories/' + item.slug}>{item.name}</a></li>
            );
        }

    }
});

module.exports = FooterItem;