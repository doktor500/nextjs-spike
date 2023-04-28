import fetch from "isomorphic-fetch";

import MoviesRepository from "@/src/movies/application/repositories/moviesRepository";
import Movie from "@/src/movies/domain/entities/movie";
import { config } from "@/app/config";

type MovieResponse = {
  id: string;
  original_title: string;
};

export default class ExternalMoviesRepository implements MoviesRepository {
  private readonly MOVIES_API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${config.MOVIE_DB_API_KEY}`;

  getAll(): Promise<Movie[]> {
    return fetch(this.MOVIES_API_URL)
      .then((data) => data.json())
      .then((response) => response.results)
      .then((movies) =>
        movies.map((movie: MovieResponse) => ({
          id: movie.id,
          name: movie.original_title,
        }))
      );
  }
}
