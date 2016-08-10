/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var SidebarIntroduction = require('./SidebarIntroduction.react');
var SidebarAdvertisement = require('./SidebarAdvertisement.react');
var SidebarArchives = require('./SidebarArchives.react');
var SidebarWidget = require('./SidebarWidget.react');
var SidebarRecentComments = require('./SidebarRecentComments.react');
var SidebarFriendlyLinks = require('./SidebarFriendlyLinks.react');

var Sidebar = React.createClass({
    render: function() {
        return (
            <aside id="sidebar">
                <div className="inner">
                    <section>
                        <ul>
                            <SidebarIntroduction />
                            <SidebarWidget source="/blog/v1/posts?sortby=ID&order=asc&offset=0&limit=10&cat=javascript" />
                            <SidebarWidget source="/blog/v1/posts?sortby=ID&order=asc&offset=0&limit=10&cat=jquery" />
                            <SidebarWidget source="/blog/v1/posts?sortby=ID&order=asc&offset=0&limit=10&cat=php" />
                            <SidebarRecentComments source="/blog/v1/comments?order=desc&offset=0&limit=3" />
                            <SidebarFriendlyLinks />
                        </ul>
                    </section>
                </div>
            </aside>
        );
    }
});

module.exports = Sidebar;