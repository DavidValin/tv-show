import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import TvShowEpisody from './TvShowEpisody';
import { tvShowEpisodyTestData } from './TvShowEpisody.testData';

it('should match the snapshot', () => {
  const tree = renderer.create(<Router><TvShowEpisody episody={tvShowEpisodyTestData.episody} /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});