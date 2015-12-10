const Layout = require('./layout.jsx');
const React = require('react');
const Router = require('react-router');

module.exports = React.createClass({
  render: function render() {
    return (
      <Layout {...this.props}>
        <Router.RouteHandler {...this.props}/>
      </Layout>
    );
  }
});
