/**
 * Created by Administrator on 4/9.
 */
var React = require('react');
var ReactDOM = require('react-dom');
var ReactDOMServer = require('react-dom/server');

var postTitle = React.createElement('h1', {
    className: 'post-title',
    key: 'post-title'
}, 'This is post title');
var postContent = React.createElement('p', {
    className: 'post-content',
    key: 'post-content'
}, 'And that\'s post content');
// var post = React.createElement('section', {
//     className: 'post-container'
// }, [postTitle, postContent]);
// var post = React.createFactory('section');
var post0 = React.DOM.section({
    className: 'post-0',
    key: 'post-0'
}, [postTitle, postContent]);
var post1 = React.DOM.section({
    className: 'post-1',
    key: 'post-1'
}, [postTitle, postContent]);
var post2 = React.DOM.section({
    className: 'post-2',
    key: 'post-2'
}, [postTitle, postContent]);
var post3 = React.DOM.section({
    className: 'post-3',
    key: 'post-3'
}, [postTitle, postContent]);
var post4 = React.DOM.section({
    className: 'post-4',
    key: 'post-4'
}, [postTitle, postContent]);
var post5 = React.DOM.section({
    className: 'post-5',
    key: 'post-5'
}, [postTitle, postContent]);
var post6 = React.DOM.section({
    className: 'post-6',
    key: 'post-6'
}, [postTitle, postContent]);
var post7 = React.DOM.section({
    className: 'post-7',
    key: 'post-7'
}, [postTitle, postContent]);
var posts = React.createElement('article', {
    className: 'posts'
}, [post0, post1, post2, post3, post4, post5, post6, post7]);
var newPosts = <article className="posts-container">
    <section className="post-0">123</section>
    <section className="post-1">456</section>
</article>;
// ReactDOM.render(newPosts, document.getElementById('react-application'), function() {
//     console.log('Rendering completed!');
// });

var ReactClassPost = React.createClass({
    render: function() {
        return React.createElement('h1', {
            className: 'post-title'
        }, 'Post Title');
    }
});
var reactComponentElementPost = React.createElement(ReactClassPost);
var reactComponent = ReactDOM.render(reactComponentElementPost, document.getElementById('react-application'));