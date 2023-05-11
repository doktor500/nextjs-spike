import { MovieContent } from "@/src/modules/movies/application/cms/moviesCms";

export type MovieCMSResponse = {
  id: number;
  purchaseUrl: string | undefined;
};

export const mapToMovieContent = (movie: MovieCMSResponse): MovieContent => {
  const purchaseUrl = movie.purchaseUrl ? new URL(movie.purchaseUrl) : undefined;
  return { id: movie.id, purchaseUrl };
};
