export type MovieId = number;
export type Minutes = number;

type Movie = {
  id: MovieId;
  title: string;
  overview: string;
  posterPath: string;
  releaseDate: Date;
  duration: Minutes;
  purchaseUrl?: string;
};

export default Movie;
