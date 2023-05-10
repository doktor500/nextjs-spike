import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";
import Movie, { MovieId } from "@/src/modules/movies/domain/entities/movie";

const movies: Movie[] = [
  {
    id: 603,
    title: "The Matrix",
    overview:
      "Set in the 22nd century, The Matrix tells the story of a computer hacker who joins a group of underground insurgents fighting the vast and powerful computers who now rule the earth.",
    duration: 136,
    releaseDate: new Date("1999-03-30T00:00:00.000Z"),
    posterPath: new URL("https://www.themoviedb.org/t/p/w1280/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg"),
    purchaseUrl: new URL("https://www.primevideo.com/detail/Matrix/0LTTL5BTBJ6UCCYMPS6AI46169"),
  },
];

class FakeMoviesClient implements MoviesCatalogue {
  async getById(id: MovieId): Promise<Movie | undefined> {
    return movies.find((movie) => movie.id === id);
  }

  async getAll(): Promise<Movie[]> {
    return movies;
  }
}

const fakeMoviesClient: MoviesCatalogue = new FakeMoviesClient();

export default fakeMoviesClient;
