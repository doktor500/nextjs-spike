import MoviesRepository from "@/src/modules/movies/infrastructure/adapters/repositories/defaultMoviesRepository";
import MoviesCms from "@/src/modules/movies/infrastructure/adapters/cms/defaultMoviesCms";
import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";

export default class DefaultMoviesCatalogue extends MoviesCatalogue {
  constructor() {
    super({ moviesRepository: new MoviesRepository(), moviesCms: new MoviesCms() });
  }
}
