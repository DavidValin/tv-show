/**
 * Actions
 */
export const SET_TV_SHOW_EPISODY = 'SET_TV_SHOW_EPISODY';
export const SET_TV_SHOW = 'SET_TV_SHOW';

export function setTvShowEpisody(payload:any) {
  return { type: SET_TV_SHOW_EPISODY, payload };
}

export function setTvShow(payload:any) {
  return { type: SET_TV_SHOW, payload };
}