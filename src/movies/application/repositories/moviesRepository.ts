import Movie from "@/src/movies/domain/entities/movie";

export default interface MoviesRepository {
  getAll(): Promise<Movie[]>;
}
