/**
 * Created by Administrator on 4/10.
 */
var React = require('react');

var FooterItem = require('./FooterItem.react');

var FooterLists = React.createClass({
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
            return (
                <FooterItem key={key} item={item} />
            );
        });
        return (
            <div className="inner">
                <h4>Categories</h4>
                <ul className="clearfix">
                    {lis}
                </ul>
            </div>
        );
    }
});

module.exports = FooterLists;