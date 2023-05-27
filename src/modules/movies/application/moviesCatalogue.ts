import Movie, { MovieId } from "@/src/modules/movies/domain/entities/movie";
import MoviesRepository from "@/src/modules/movies/application/repositories/moviesRepository";
import MoviesCms from "@/src/modules/movies/application/cms/moviesCms";

export default class MoviesCatalogue {
  private readonly moviesRepository: MoviesRepository;
  private readonly moviesCms: MoviesCms;

  constructor({ moviesRepository, moviesCms }: { moviesRepository: MoviesRepository; moviesCms: MoviesCms }) {
    this.moviesRepository = moviesRepository;
    this.moviesCms = moviesCms;
  }

  getById(id: MovieId): Promise<Movie | undefined> {
    return Promise.all([this.moviesRepository.getById(id), this.moviesCms.getById(id)]).then(
      ([movie, movieMetadata]) => {
        return movie && { ...movie, purchaseUrl: movieMetadata?.purchaseUrl };
      }
    );
  }

  getAll(): Promise<Movie[]> {
    return Promise.all([this.moviesRepository.getAll(), this.moviesCms.getAll()]).then(([movies, moviesMetadata]) => {
      return movies.map((movie) => ({
        ...movie,
        purchaseUrl: moviesMetadata.find((movie) => movie.id === movie.id)?.purchaseUrl,
      }));
    });
  }
}
