import { MovieId } from "@/src/modules/movies/domain/entities/movie";
import MoviesCms, { MovieContent } from "@/src/modules/movies/application/cms/moviesCms";
import { movieContent } from "@/test/data/movies/content/movies";

export default class FakeMoviesCms implements MoviesCms {
  async getById(id: MovieId): Promise<MovieContent | undefined> {
    return movieContent.find((movie) => movie.id === id);
  }

  async getAll(): Promise<MovieContent[]> {
    return movieContent;
  }
}
