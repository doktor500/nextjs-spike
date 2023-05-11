import Movie, { MovieId } from "@/src/modules/movies/domain/entities/movie";

export type MovieDTO = Omit<Movie, "purchaseUrl">;

export default interface MoviesRepository {
  getById(id: MovieId): Promise<MovieDTO | undefined>;
  getAll(): Promise<MovieDTO[]>;
}
