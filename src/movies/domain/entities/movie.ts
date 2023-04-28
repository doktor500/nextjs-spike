export type MovieId = string;
export type Minutes = number;

type Movie = {
  id: MovieId;
  title: string;
  overview: string;
  posterPath: URL;
  releaseDate: Date;
  duration: Minutes;
};

export default Movie;
