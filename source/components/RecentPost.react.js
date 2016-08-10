/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var RecentPost = React.createClass({
    render: function() {
        var item = this.props.item;
        return (
            <article>
                <header className="clearfix">
                    <a href={'/blog/archives/' + item['ID'] + '.html'}>{item['post_title']}</a>
                    <span>{item['post_date']}</span>
                </header>
                <section>{item['post_content']}</section>
            </article>
        );
    }
});

module.exports = RecentPost;