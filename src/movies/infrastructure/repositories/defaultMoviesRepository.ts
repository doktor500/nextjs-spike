import fetch from "isomorphic-fetch";

import MoviesRepository from "@/src/movies/application/repositories/moviesRepository";
import Movie, { MovieId } from "@/src/movies/domain/entities/movie";
import { config } from "@/app/config";

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

export default class DefaultMoviesRepository implements MoviesRepository {
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
