import React from 'react';
import './App.scss';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom';
import TvShowContainer from './containers/TvShowContainer/TvShowContainer';
import TvShowEpisodyContainer from './containers/TvShowEpisodyContainer/TvShowEpisodyContainer';

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={'/shows/:showId/episodes/:id'}>
          <TvShowEpisodyContainer />
        </Route>
        <Route path='/'>
          <TvShowContainer id='6771' />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
