'use strict';
require('babel/register');

const path = require('path');
const express = require('express');
const renderer = require('react-engine');
const filmInfo = require('./data/film-info');
const app = express();
const engine = renderer.server.create({
  routes: require(path.join(__dirname, '/public/routes.jsx')),
  routesFilePath: path.join(__dirname, '/public/routes.jsx')
});

// set the engine
app.engine('.jsx', engine);

// static content
app.set('views', path.join(__dirname, '/public/views'));
app.set('view engine', 'jsx');
app.set('view', renderer.expressView);
app.use(express.static(path.join(__dirname, '/public')));

// main route
app.get('/web-se/film/:name', function(req, res, next) {
  filmInfo.getFilm(req.params.name)
  .then(function(response){
    res.render(req.url, {
      title: 'Viaplay - ' + response.product._links.self.title,
      film: response
    });
  })
  .catch(function(error){
    next();
  });
});

// 404 template
app.use(function(req, res) {
  res.render('404', {
    title: 'Viaplay - We have a problem',
    url: req.url
  });
});

const server = app.listen(8080, function() {
  const host = server.address().address;
  const port = server.address().port;
  console.log('Example app listening at http://%s:%s', host, port);
  console.log('Demo urls http://localhost:%s/web-se/film/neighbors-2014', port);
  console.log('Demo urls http://localhost:%s/web-se/film/birdman-2014', port);
});
