import MoviesRepository from "@/src/movies/application/repositories/moviesRepository";
import Movie from "@/src/movies/domain/entities/movie";

export const movies: Movie[] = [
  {
    id: "1",
    title: "The Matrix",
    releaseDate: new Date("1999/06/17"),
    posterPath: new URL("https://www.themoviedb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"),
  },
];

export default class FakeMoviesRepository implements MoviesRepository {
  async getAll(): Promise<Movie[]> {
    return movies;
  }
}
