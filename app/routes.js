
import React from 'react';
import { Route, DefaultRoute } from 'react-router';


import MersoCarlin  from './containers/mersocarlin';
import ReactLoaders from './containers/react-loaders';


export default (
  <Route>
    <Route path="/" handler={MersoCarlin}>
      <DefaultRoute handler={MersoCarlin}/>
    </Route>

    <Route path="/github/react-loaders" name="react-loaders" handler={ReactLoaders}/>
  </Route>
);
