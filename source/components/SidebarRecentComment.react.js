/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var SidebarRecentComment = React.createClass({
    render: function() {
        var item = this.props.item;
        return (
            <li className="sidebar_recentcomment">
                <span className="sidebar_comment_author">
                    <a href={item['comment_author_url']} title={item['comment_author'] + ' on ' + item['comment_date']}>
                        <span className="fn n">{item['comment_author']}</span>
                    </a>
                </span>
                <span className="sidebar_comment_byline">on <cite title={item['post_title']}>{item['post_title']}</cite></span>
                <blockquote className="sidebar_comment_content" cite={'/blog/archives/' + item['comment_post_ID'] + '.html#comment-' + item['comment_ID']} title={'Comment on ' + item['post_title']}>{item['comment_excerpt']}</blockquote>
            </li>
        );
    }
});

module.exports = SidebarRecentComment;