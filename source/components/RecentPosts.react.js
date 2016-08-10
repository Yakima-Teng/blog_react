/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var RecentPost = require('./RecentPost.react');

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
                <RecentPost key={key} item={item} />
            );
        });
        return (
            <article className="home_recent_posts">
                <div className="inner">
                    {lis}
                </div>
            </article>
        );
    }
});

module.exports = RandomPosts;