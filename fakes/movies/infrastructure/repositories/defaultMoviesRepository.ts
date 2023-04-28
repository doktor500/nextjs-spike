import MoviesRepository from "@/src/movies/application/repositories/moviesRepository";
import Movie from "@/src/movies/domain/entities/movie";

export const movies: Movie[] = [{ id: "1", name: "The matrix" }];

export default class FakeMoviesRepository implements MoviesRepository {
  async getAll(): Promise<Movie[]> {
    return movies;
  }
}
