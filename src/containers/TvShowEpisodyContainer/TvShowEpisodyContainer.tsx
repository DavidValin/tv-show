import React, {useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { getTvShowEpisody } from '../../services/episody';
import TvShowEpisody from '../../components/TvShowEpisody/TvShowEpisody';
import { setTvShowEpisody } from '../../state/actions';
import { connect } from 'react-redux';
import { ITvShowEpisody, IAppState } from '../../state/initial_state';

interface IParams {
  tvShowEpisody: ITvShowEpisody,
  actions: {
    setTvShowEpisody: Function
  }
}

const mapStateToProps = (state:IAppState) => ({
  tvShowEpisody: state.tvShowEpisody
})

const mapDispatchToProps = (dispatch:any) => ({
  actions: {
    setTvShowEpisody:    (tvShowEpisody:ITvShowEpisody) => dispatch(setTvShowEpisody(tvShowEpisody))
  }
})

const ConnectedTvShowEpisodyContainer = (props:IParams) => {
  let { id } = useParams();

  useEffect(() => {
    getTvShowEpisody(id).then((episodyData) => {
      props.actions.setTvShowEpisody({
        id:       episodyData.id,
        title:    episodyData.name,
        summary:  episodyData.summary,
        coverImg: episodyData.image
      });
    });
  }, [id, 'tvShowEpisody', props.actions]);

  useEffect(() => {
    return () => {
      // Reset state on unmount
      props.actions.setTvShowEpisody({
        id:       undefined,
        title:    '',
        summary:  '',
        coverImg: {
          medium: '',
          original: ''
        }
      });
    }
  }, [props.actions]);

  return (
    <div className='TvShowEpisodyContainer'>
      <TvShowEpisody episody={props.tvShowEpisody} />
    </div>
  );
}

const TvShowEpisodyContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedTvShowEpisodyContainer);

export default TvShowEpisodyContainer;
