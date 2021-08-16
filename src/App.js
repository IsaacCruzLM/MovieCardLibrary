import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import * as routes from './pages/index';
import Header from './components/Header';

import './App.css';

function App() {
  const { MovieList, NewMovie, EditMovie, MovieDetails, NotFound } = routes;
  return (
    <BrowserRouter basename={ process.env.PUBLIC_URL }>
      <Header />
      <Switch>
        <Route path="/movies/new" component={ NewMovie } />
        <Route
          path="/movies/:id/edit"
          render={ (props) => <EditMovie { ...props } /> }
        />
        <Route path="/movies/:id" render={ (props) => <MovieDetails { ...props } /> } />
        <Route exact path="/" component={ MovieList } />
        <Route exact path="*" component={ NotFound } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
