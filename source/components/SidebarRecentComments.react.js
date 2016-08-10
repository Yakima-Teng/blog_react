/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var SidebarRecentComment = require('./SidebarRecentComment.react');

var SidebarRecentComments = React.createClass({
    getInitialState: function() {
        return {
            items: []
        };
    },
    componentDidMount: function() {
        $.get(this.props.source, function(resp) {
            var items = resp.responseBody;
            console.log(items);
            if (this.isMounted()) {
                console.log(items);
                this.setState({
                    items: items
                });
            }
        }.bind(this));
    },
    render: function() {
        var lis = this.state.items.map(function(item, key) {
            return (
                <SidebarRecentComment key={key} item={item} />
            );
        });
        return (
            <li className="sidebar_widget sidebar_recentcomments">
                <h4>近期评论</h4>
                <ul>
                    {lis}
                </ul>
            </li>
        );
    }
});

module.exports = SidebarRecentComments;