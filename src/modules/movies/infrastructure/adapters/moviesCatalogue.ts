import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";
import Movie, { MovieId } from "@/src/modules/movies/domain/entities/movie";
import { config } from "@/src/modules/shared/infrastructure/config";

type MovieResponse = {
  id: string;
  original_title: string;
  overview: string;
  runtime: number;
  poster_path: string;
  release_date: string;
};

const IMAGE_PATH = "https://www.themoviedb.org/t/p/original";
const BASE_API_URL = "https://api.themoviedb.org/3/movie/";

export default class HTTPMoviesClient implements MoviesCatalogue {
  getById(id: MovieId): Promise<Movie | undefined> {
    return fetch(`${BASE_API_URL}/${id}?api_key=${config.MOVIE_DB_API_KEY}`)
      .then((data) => data.json())
      .then(mapToMovie);
  }

  getAll(): Promise<Movie[]> {
    return fetch(`${BASE_API_URL}/popular?api_key=${config.MOVIE_DB_API_KEY}`)
      .then((data) => data.json())
      .then((response) => response.results)
      .then((movies: MovieResponse[]) => movies.map(mapToMovie));
  }
}

const mapToMovie = (movie: MovieResponse): Movie => {
  return {
    id: movie.id,
    title: movie.original_title,
    overview: movie.overview,
    duration: movie.runtime,
    posterPath: new URL(`${IMAGE_PATH}/${movie.poster_path}`),
    releaseDate: new Date(movie.release_date),
  };
};
