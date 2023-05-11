import { MovieId } from "@/src/modules/movies/domain/entities/movie";
import { config } from "@/src/modules/shared/infrastructure/config";
import MoviesRepository, { MovieDTO } from "@/src/modules/movies/application/repositories/moviesRepository";

const IMAGE_PATH = "https://www.themoviedb.org/t/p/original";
const BASE_API_URL = "https://api.themoviedb.org/3/movie/";

type MovieResponse = {
  id: number;
  original_title: string;
  overview: string;
  runtime: number;
  poster_path: string;
  release_date: string;
};

export default class HttpMoviesRepository implements MoviesRepository {
  getById(id: MovieId): Promise<MovieDTO | undefined> {
    return fetch(`${BASE_API_URL}/${id}?api_key=${config.MOVIE_DB_API_KEY}`)
      .then((data) => data.json())
      .then(mapToMovieDetails);
  }

  getAll(): Promise<MovieDTO[]> {
    return fetch(`${BASE_API_URL}/popular?api_key=${config.MOVIE_DB_API_KEY}`)
      .then((data) => data.json())
      .then((response) => response.results)
      .then((movies: MovieResponse[]) => movies.map(mapToMovieDetails));
  }
}

const mapToMovieDetails = (movie: MovieResponse): MovieDTO => {
  return {
    id: movie.id,
    title: movie.original_title,
    overview: movie.overview,
    duration: movie.runtime,
    posterPath: new URL(`${IMAGE_PATH}/${movie.poster_path}`),
    releaseDate: new Date(movie.release_date),
  };
};
