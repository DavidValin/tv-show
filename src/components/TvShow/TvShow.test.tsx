import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import TvShow from './TvShow';
import { tvShowTestData } from './TvShow.testData';

it('should match the snapshot', () => {
  const tree = renderer.create(<Router><TvShow tvShow={tvShowTestData.tvShow} /></Router>).toJSON();
  expect(tree).toMatchSnapshot();
});