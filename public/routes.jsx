'use strict';
const React = require('react');
const Router = require('react-router');
const App = require('./views/app.jsx');
const FilmDetails = require('./views/film-details.jsx');
const routes = (
  <Router.Route path='/web-se/film/:names' handler={App}>
    <Router.DefaultRoute name='filmDetails' handler={FilmDetails} />
  </Router.Route>
);

module.exports = routes;
