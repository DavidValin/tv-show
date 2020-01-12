/**
 * Retrieves a list of episodes for a given Tv Show
 * @param showId The id of the tv show to retrieve
 */
export function getTvShowEpisodes(showId:string|undefined) {
  return fetch(`http://api.tvmaze.com/shows/${showId}/episodes`)
    .then((response) => response.json().then((json) => json.map((item:any) => ({
      id:       item.id,
      name:     item.name,
      summary:  (item.summary ? item.summary.replace(/(<([^>]+)>)/ig, '') : ''),
      image:    item.image
    }))));
};

/**
 * Retrieves a tv show episody by its id
 * @param id The id of the episody to retrieve
 */
export function getTvShowEpisody(id:string|undefined) {
  return fetch(`http://api.tvmaze.com/episodes/${id}`)
    .then((response) => response.json().then((json) => ({
      id:       json.id,
      name:     json.name,
      summary:  (json.summary ? json.summary.replace(/(<([^>]+)>)/ig, '') : ''),
      image:    json.image
    })));
};



