import { createClient } from "next-sanity";
import { head } from "ramda";

import { MovieId } from "@/src/modules/movies/domain/entities/movie";
import { config } from "@/src/modules/shared/infrastructure/config";
import {
  mapToMovieContent,
  MovieCMSResponse,
} from "@/src/modules/movies/infrastructure/adapters/cms/mapper/movieMapper";
import MoviesCms, { MovieContent } from "@/src/modules/movies/application/cms/moviesCms";

export default class SanityMoviesCms implements MoviesCms {
  private readonly client = createClient({
    projectId: config.SANITY_IO_PROJECT_ID,
    dataset: config.SANITY_IO_DATASET,
    apiVersion: config.SANITY_IO_API_VERSION,
    useCdn: true,
  });

  getById(id: MovieId): Promise<MovieContent | undefined> {
    return this.client
      .fetch(`*[_type == "movie" && id == ${id}]`)
      .then((movies: MovieCMSResponse[]) => head(movies.map(mapToMovieContent)));
  }

  getAll(): Promise<MovieContent[]> {
    return this.client.fetch(`*[_type == "movie"]`).then((movies) => movies.map(mapToMovieContent));
  }
}
