'use strict';
const React = require('react');
const Header = require('./header.jsx');
const Footer = require('./footer.jsx');

module.exports = React.createClass({
  render: function render() {
    return (
      <html className="no-js" lang="">
        <head>
          <title>{this.props.title}</title>
          <meta charSet="UTF-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="description" content />
          <meta name="og:image" content />
          <link href="http://assets.viaplay.tv/frontend-2015113001/css/index.min.cf37ebcf.css" rel="stylesheet" type="text/css" />
          <link href="http://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700,300" rel="stylesheet" type="text/css" />
        </head>
        <body>
            <Header></Header>
            <div id="content-wrapper">
              {this.props.children}
            </div>
            <Footer></Footer>
            <script src='/bundle.js'></script>
        </body>
      </html>
    );
  }
});
