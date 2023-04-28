import fetch from "isomorphic-fetch";

import MoviesRepository from "@/src/movies/application/repositories/moviesRepository";
import Movie from "@/src/movies/domain/entities/movie";
import { config } from "@/app/config";

type MovieResponse = {
  id: string;
  original_title: string;
  poster_path: string;
  release_date: string;
};

const IMAGE_PATH = "https://www.themoviedb.org/t/p/original";
const MOVIES_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIE_DB_API_KEY}`;

export default class DefaultMoviesRepository implements MoviesRepository {
  getAll(): Promise<Movie[]> {
    return fetch(MOVIES_API_URL)
      .then((data) => data.json())
      .then((response) => response.results)
      .then((movies: MovieResponse[]) => movies.map(mapToMovie));
  }
}

const mapToMovie = (movie: MovieResponse): Movie => {
  return {
    id: movie.id,
    title: movie.original_title,
    posterPath: new URL(`${IMAGE_PATH}/${movie.poster_path}`),
    releaseDate: new Date(movie.release_date),
  };
};
