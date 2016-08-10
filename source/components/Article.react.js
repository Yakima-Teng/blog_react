/**
 * Created by Administrator on 4/9.
 */
var React = require('react');
var RandomPosts = require('./RandomPosts.react');
var Advertisement = require('./Advertisement.react');
var RecentPosts = require('./RecentPosts.react');

var Article = React.createClass({
    render: function() {
        return (
            <article id="content">
                <div className="inner">
                    <RecentPosts source="/blog/v1/posts?sortby=ID&order=asc&offset=0&limit=10&cat=regulatory-affairs" />
                </div>
            </article>
        );
    }
});

module.exports = Article;