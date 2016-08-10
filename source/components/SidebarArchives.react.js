/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var SidebarArchiveItems = require('./SidebarArchiveItems.react');

var SidebarArchives = React.createClass({
    render: function() {
        return (
            <li className="sidebar_tabs">
                <header>
                    <label for="tabJavascript">JavaScript</label>
                    <label for="tabJQuery">jQuery</label>
                    <label for="tabAngularJS">AngularJS</label>
                </header>
                <section>
                    <SidebarArchiveItems source="/blog/v1/posts?sortby=ID&order=asc&offset=0&limit=10&cat=javascript" inputId="tabJavaScript" />
                    <SidebarArchiveItems source="/blog/v1/posts?sortby=ID&order=asc&offset=0&limit=10&cat=jquery" inputId="tabJQuery" />
                    <SidebarArchiveItems source="/blog/v1/posts?sortby=ID&order=asc&offset=0&limit=10&cat=angularjs" inputId="tabAngularJS" />
                </section>
            </li>
        );
    }
});

module.exports = SidebarArchives;