/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var FooterLists = require('./FooterLists.react.js');

var Footer = React.createClass({
    render: function() {
        return (
            <footer id="footer" className="site_footer">
                <div className="footerContent">
                    <section className="footerLists">
                        <FooterLists source="/blog/v1/categories" />
                        <FooterLists source="/blog/v1/pages" />
                    </section>
                </div>
                <div className="footerEnd">
                    Copyright &copy; 2009-2016 Yakima Teng's Garden. Powered by Node.js
                </div>
                <div className="decoration"></div>
            </footer>
        );
    }
});

module.exports = Footer;