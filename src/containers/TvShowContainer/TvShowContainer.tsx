import React, {useEffect} from 'react';
import TvShow from '../../components/TvShow/TvShow';
import { ITvShow, IAppState } from '../../state/initial_state';
import { setTvShow } from '../../state/actions';
import { getTvShow } from '../../services/tv_show';
import { getTvShowEpisodes } from '../../services/episody';
import { connect } from 'react-redux';

interface IParams {
  id: string,
  tvShow: ITvShow,
  actions: {
    setTvShow: Function
  }
}

const mapStateToProps = (state:IAppState) => ({
  tvShow: state.tvShow
})

const mapDispatchToProps = (dispatch:any) => ({
  actions: {
    setTvShow:    (tvShow:ITvShow) => dispatch(setTvShow(tvShow))
  }
})

const ConnectedTvShowContainer = (props:IParams) => {
  useEffect(() => {
    Promise.all([getTvShow('6771'), getTvShowEpisodes('6771')]).then((val:any) => {
      props.actions.setTvShow({
        id:           val[0].id,
        title:        val[0].name,
        description:  val[0].summary,
        coverImg:     val[0].image,
        episodes:    val[1]
      });
    });
  }, ['tvShow', props.actions]);

  return (
    <div className='TvShowContainer'>
      <TvShow tvShow={props.tvShow} /> 
    </div>
  );
};

const TvShowContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTvShowContainer);

export default TvShowContainer;