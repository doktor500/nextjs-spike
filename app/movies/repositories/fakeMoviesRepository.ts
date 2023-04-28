import MoviesRepository from "@/src/movies/application/repositories/moviesRepository";
import Movie from "@/src/movies/domain/entities/movie";

export default class FakeMoviesRepository implements MoviesRepository {
  private readonly movies: Movie[] = [{ id: "1", name: "The matrix" }];

  async getAll(): Promise<Movie[]> {
    return this.movies;
  }
}
