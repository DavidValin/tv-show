import React from 'react';
import './TvShowEpisody.scss';
import { ITvShowEpisody } from '../../state/initial_state';
import { Link } from 'react-router-dom';
import getAvailableImage from '../../util';

export interface IParams {
  episody: ITvShowEpisody
}

export default function TvShowEpisody(props:IParams) {
  return (
    <div className='TvShowEpisody'>
      <img className='TvShowEpisody__cover' src={getAvailableImage(props.episody.coverImg)} alt={props.episody.title} />
      <div className='TvShowEpisody__details'>
        <h2 className='TvShowEpisody__details__name'>
          {props.episody.title}
        </h2>
        <p className='TvShowEpisody__details__summary'>
          {props.episody.summary}
        </p>
        <Link to={'/'} className='TvShowEpisody__go-back'>
          go back
        </Link>
      </div>
    </div>
  );
}
