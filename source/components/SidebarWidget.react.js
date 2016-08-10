/**
 * Created by Administrator on 4/10.
 */
var React = require('react');

var SidebarArchiveItem = require('./SidebarArchiveItem.react');

var SidebarWidget = React.createClass({
    getInitialState: function() {
        return {
            items: []
        };
    },
    componentDidMount: function() {
        $.get(this.props.source, function(resp) {
            var items = resp.responseBody;
            if (this.isMounted()) {
                this.setState({
                    items: items
                });
            }
        }.bind(this));
    },
    render: function() {
        var lis = this.state.items.map(function(item, key) {
            return <SidebarArchiveItem key={key} item={item} />;
        });
        return (
            <li className="sidebar_widget">
                <h4>jQuery</h4>
                <ul>
                    {lis}
                </ul>
            </li>
        );
    }
});

module.exports = SidebarWidget;