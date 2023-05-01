import Movie, { MovieId } from "@/src/modules/movies/domain/entities/movie";

export default interface MoviesRepository {
  getById(id: MovieId): Promise<Movie | undefined>;
  getAll(): Promise<Movie[]>;
}