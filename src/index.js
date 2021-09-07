import movies from ("./data/movies.json");
import { fetchWithTimeout } from ("./services");

export function fetchMovies() {
  function resolveFunction() { return movies};

  return fetchWithTimeout(1000).then(resolveFunction);
}

const moviePromise = fetchMovies();
moviePromise.then((results) => { console.log(results)});
