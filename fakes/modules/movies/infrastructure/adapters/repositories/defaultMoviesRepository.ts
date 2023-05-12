import { MovieId } from "@/src/modules/movies/domain/entities/movie";
import MoviesRepository, { MovieDTO } from "@/src/modules/movies/application/repositories/moviesRepository";
import { movieData } from "@/test/data/movies/dtos/movies";

export default class FakeMoviesRepository implements MoviesRepository {
  async getById(id: MovieId): Promise<MovieDTO | undefined> {
    return movieData.find((movie) => movie.id === id);
  }

  async getAll(): Promise<MovieDTO[]> {
    return movieData;
  }
}