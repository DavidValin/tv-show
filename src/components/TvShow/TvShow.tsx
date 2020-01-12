import React from 'react';
import { Link } from 'react-router-dom';
import './TvShow.scss';
import { ITvShow } from '../../state/initial_state';

export interface IParams {
  tvShow: ITvShow
}

const TvShow = (props:IParams) => (
  <div className='TvShow'>
    <div className='TvShow__cover'>
      <img src={props.tvShow.coverImg.original} alt={props.tvShow.title} />
    </div>
    <div className='TvShow__details'>
      <h2>{props.tvShow.title}</h2>
      <p>{props.tvShow.description}</p>
      <div className='TvShow__details__episodes'>
        <h3 className='TvShow__details__episodes__heading'>
          Episodes
        </h3>
        {props.tvShow.episodes.map((episody, i) => (
          <Link key={i} to={`/shows/${props.tvShow.id}/episodes/${episody.id}`} className='TvShow__details__episodes__episody'>
            {episody.name}
          </Link>
        ))}
      </div>
    </div>
  </div>
)

export default TvShow;

