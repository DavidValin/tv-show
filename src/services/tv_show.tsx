/**
 * Retrieves the data of a tv show by its id
 * @param id The id of the show to retrieve
 */
export function getTvShow(id:string|undefined) {
  return fetch(`http://api.tvmaze.com/shows/${id}`)
    .then((response) => response.json().then((json) => ({
      id:       json.id,
      name:     json.name,
      summary:  (json.summary ? json.summary.replace(/(<([^>]+)>)/ig, '') : ''),
      image:    json.image
    })));
}