import initialState, { IAppState } from './initial_state';
import {
  SET_TV_SHOW,
  SET_TV_SHOW_EPISODY
} from './actions';


/**
 * Reduces the state
 * @param state The original state
 * @param action The action to perform in the state
 */
function appReducer(state:IAppState = initialState, action:any) {
  switch(action.type) {
    case SET_TV_SHOW:
      return setTvShowReducer(state, action);
    case SET_TV_SHOW_EPISODY:
      return setTvShowEpisodyReducer(state, action);
  }
  return state;
};

/**
 * Reduces the state by setting the current Tv Show
 * @param state The original state
 * @param action The action to perform in the state
 */
function setTvShowReducer(state:IAppState, action:any): IAppState {
  return {...state, ...{tvShow: action.payload}};
};

/**
 * Reduces the state by setting the current Episody
 * @param state The original state
 * @param action The action to perform in the state
 */
function setTvShowEpisodyReducer(state:IAppState, action:any): IAppState {
  return {...state, ...{tvShowEpisody: action.payload}};
};

export default appReducer;
