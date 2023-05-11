import FakeMoviesRepository from "@/fakes/modules/movies/infrastructure/adapters/repositories/defaultMoviesRepository";
import FakeMoviesCms from "@/fakes/modules/movies/infrastructure/adapters/cms/defaultMoviesCms";
import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";

export default class FakeMoviesCatalogue extends MoviesCatalogue {
  constructor() {
    super({ moviesRepository: new FakeMoviesRepository(), moviesCms: new FakeMoviesCms() });
  }
}
