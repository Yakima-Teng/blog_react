/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var Header = require('./Header.react');
var Article = require('./Article.react');
var Sidebar = require('./Sidebar.react');
var Footer = require('./Footer.react');
var Application = React.createClass({
    getInitialState: function() {
        return {
            collectionTweets: {}
        }
    },
    addTweetToCollection: function(tweet) {
        var collectionTweets = tis.state.collectionTweets;
        collectionTweets[tweet.id] = tweet;
        this.setState({
            collectionTweets: collectionTweets
        });
    },
    removeTweetFromCollection: function(tweet) {
        var collectionTweets = this.state.collectionTweets;
        delete collectionTweets[tweet.id];
        this.setState({
            collectionTweets: collectionTweets
        });
    },
    render: function() {
        return (
            <div id="wrapper">
                <Header />
                <Article onAddTweetToCollection ={this.addTweetToCollection} />
                <Sidebar tweets={this.state.collectionTweets} onRemoveTweetFromCollection={this.removeTweetFromCollection} />
                <Footer />
            </div>
        );
    }
});
module.exports = Application;