import { createClient } from "contentful";
import { head } from "ramda";

import { MovieId } from "@/src/modules/movies/domain/entities/movie";
import { config } from "@/src/modules/shared/infrastructure/config";
import {
  mapToMovieContent,
  MovieCMSResponse,
} from "@/src/modules/movies/infrastructure/adapters/cms/mapper/movieMapper";
import MoviesCms, { MovieContent } from "@/src/modules/movies/application/cms/moviesCms";

export default class ContentfulMoviesCms implements MoviesCms {
  private readonly client = createClient({
    space: config.CONTENTFUL_SPACE,
    environment: config.CONTENTFUL_ENVIRONMENT,
    accessToken: config.CONTENTFUL_ACCESS_TOKEN,
  });

  getById(id: MovieId): Promise<MovieContent | undefined> {
    return this.client
      .getEntries({ content_type: "movie", "fields.id[in]": id })
      .then((response) => head(response.items.map((item) => mapToMovieContent(item.fields as MovieCMSResponse))));
  }

  getAll(): Promise<MovieContent[]> {
    return this.client
      .getEntries({ content_type: "movie" })
      .then((response) => response.items.map((item) => mapToMovieContent(item.fields as MovieCMSResponse)));
  }
}
