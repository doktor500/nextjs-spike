import { createClient } from "next-sanity";
import { head } from "ramda";

import { MovieId } from "@/src/modules/movies/domain/entities/movie";
import { config } from "@/src/modules/shared/infrastructure/config";

type MovieCMSResponse = {
  id: number;
  purchaseUrl: string | undefined;
};

type MovieContent = {
  id: MovieId;
  purchaseUrl: URL | undefined;
};

export class MoviesCms {
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

const mapToMovieContent = (movie: MovieCMSResponse): MovieContent => {
  const purchaseUrl = movie.purchaseUrl ? new URL(movie.purchaseUrl) : undefined;
  return { id: movie.id, purchaseUrl };
};
