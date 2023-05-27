import { MovieContent } from "@/src/modules/movies/application/cms/moviesCms";

export type MovieCMSResponse = {
  id: number;
  purchaseUrl: string | undefined;
};

export const mapToMovieContent = (movie: MovieCMSResponse): MovieContent => {
  return { id: movie.id, purchaseUrl: movie.purchaseUrl };
};
