export type MovieId = number;
export type Minutes = number;

type Movie = {
  id: MovieId;
  title: string;
  overview: string;
  posterPath: URL;
  releaseDate: Date;
  duration: Minutes;
  purchaseUrl?: URL;
};

export default Movie;
