/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var RandomPost = React.createClass({
    render: function() {
        var item = this.props.item;
        return (
            <li className="random_post">
                <a href={'/blog/archives/' + item['ID'] + '.html'}>
                    <h4 className="random_title">{item['post_title']}</h4>
                </a>
            </li>
        );
    }
});

module.exports = RandomPost;