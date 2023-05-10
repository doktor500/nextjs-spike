import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";
import Movie, { MovieId } from "@/src/modules/movies/domain/entities/movie";
import { MoviesRepository } from "@/src/modules/movies/infrastructure/adapters/repositories/moviesRepository";
import { MoviesCms } from "@/src/modules/movies/infrastructure/adapters/cms/moviesCms";

class HTTPMoviesClient implements MoviesCatalogue {
  private readonly moviesRepository = new MoviesRepository();
  private readonly moviesCms = new MoviesCms();

  getById(id: MovieId): Promise<Movie | undefined> {
    return Promise.all([this.moviesRepository.getById(id), this.moviesCms.getById(id)]).then(
      ([movie, movieMetadata]) => movie && { ...movie, purchaseUrl: movieMetadata?.purchaseUrl }
    );
  }

  getAll(): Promise<Movie[]> {
    return Promise.all([this.moviesRepository.getAll(), this.moviesCms.getAll()]).then(([movies, movieMetadata]) => {
      return movies.map((movie) => ({
        ...movie,
        purchaseUrl: movieMetadata.find((movie) => movie.id === movie.id)?.purchaseUrl,
      }));
    });
  }
}

const moviesCatalogue: MoviesCatalogue = new HTTPMoviesClient();

export default moviesCatalogue;
