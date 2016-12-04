/**
 * Created by Administrator on 4/9.
 */
var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <header id="header" className="header clearfix">
                <h1 className="header_alpha clearfix"><a href="/"><img src="http://7xn7mm.com1.z0.glb.clouddn.com/yakima_bright.jpg" />Yakima Teng's Garden</a></h1>
                <nav className="header_beta">
                    <ul className="clearfix">
                        <li><a href="/blog"><i className="fa fa-bus"></i> Categories <i className="fa fa-caret-down"></i></a>
                            <ul>
                                <li><a href="#"><i className="fa fa-pencil"></i> Life <i className="fa fa-caret-down"></i></a>
                                    <ul className="clearfix">
                                        <li><a href="/blog/category/qzone">Posts@QZone</a></li>
                                        <li><a href="/blog/category/diary">Diary</a></li>
                                        <li><a href="/blog/category/authoring">Writing</a></li>
                                        <li><a href="/blog/category/reading-book">Reading</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i className="fa fa-desktop"></i> Website <i className="fa fa-caret-down"></i></a>
                                    <ul className="clearfix">
                                        <li><a href="/blog/category/html">HTML</a></li>
                                        <li><a href="/blog/category/css">CSS</a></li>
                                        <li><a href="/blog/category/">BootStrap</a></li>
                                        <li><a href="/blog/category/frontend">Frontend</a></li>
                                        <li><a href="/blog/category/javascript">JavaScript</a></li>
                                        <li><a href="/blog/category/jquery">jQuery</a></li>
                                        <li><a href="/blog/category/php">PHP</a></li>
                                        <li><a href="/blog/category/mysql">MySQL</a></li>
                                        <li><a href="/blog/category/wordpress">WordPress</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i className="fa fa-medkit"></i> Pharmacy <i className="fa fa-caret-down"></i></a>
                                    <ul className="clearfix">
                                        <li><a href="/blog/category/gmp">GMP</a></li>
                                        <li><a href="/blog/category/laboratory-instrument">Instrument</a></li>
                                        <li><a href="/blog/category/process-development">Process</a></li>
                                        <li><a href="/blog/category/manufacturing-process">Production</a></li>
                                        <li><a href="/blog/category/manufacturing-equipment">Equipment</a></li>
                                        <li><a href="/blog/category/intellectual-property-right">IPR</a></li>
                                        <li><a href="/blog/category/usp">USP</a></li>
                                        <li><a href="/blog/category/pharmaceutical-information">Info.</a></li>
                                        <li><a href="/blog/category/regulatory-affairs">RA</a></li>
                                        <li><a href="/blog/category/pharmaceutical-knowledge">Knowledge</a></li>
                                        <li><a href="/blog/category/quality-research">QR</a></li>
                                    </ul>
                                </li>
                                <li><a href="#"><i className="fa fa-line-chart"></i> Else <i className="fa fa-caret-down"></i></a>
                                    <ul className="clearfix">
                                        <li><a href="/blog/category/office-software">MS Office</a></li>
                                        <li><a href="/blog/category/copy">Collection</a></li>
                                        <li><a href="/blog/category/badminton">Badminton</a></li>
                                        <li><a href="/blog/category/english">English</a></li>
                                        <li><a href="/blog/category/uncategorized">Uncategorized</a></li>
                                        <li><a href="/blog/category/else">Else</a></li>
                                    </ul>
                                </li>
                            </ul>
                        </li>
                        <li><a href="/blog/page/about"><i className="fa fa-user-plus"></i> About</a></li>
                        <li><a href="/blog/random"><i className="fa fa-book"></i> Random</a></li>
                        <li><a href="/blog/page/collections" style={{color: 'yellow'}}><i className="fa fa-eye"></i> Collections</a></li>
                        <li><a href="/blog/post"><i className="fa fa-pencil"></i> Post</a></li>
                    </ul>
                </nav>
                <section className="header_gama">
                    <form>
                        <input type="text" id="bdcsMain" name="word" placeholder="Search..." autoComplete="on" />
                        <button type="submit">Go</button>
                    </form>
                </section>
            </header>
        );
    }
});

module.exports = Header;
