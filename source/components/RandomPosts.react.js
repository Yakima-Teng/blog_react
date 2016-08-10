/**
 * Created by Administrator on 4/9.
 */
var React = require('react');
var RandomPost = require('./RandomPost.react');

var RandomPosts = React.createClass({
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
                <RandomPost key={key} item={item} />
            );
        });
        return (
            <section className="home_random_posts">
                <ul className="wrapper clearfix">
                    {lis}
                </ul>
            </section>
        );
    }
});

module.exports = RandomPosts;