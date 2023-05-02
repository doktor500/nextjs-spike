import HTTPMoviesClient from "@/src/modules/movies/infrastructure/adapters/moviesClient";
import FakeMoviesClient, { movies } from "@/test/modules/movies/infrastructure/adapters/moviesClient";
import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";

describe("Movies catalogue", () => {
  it.each`
    client
    ${new HTTPMoviesClient()}
    ${new FakeMoviesClient()}
  `("returns a movie by id", async ({ client }: { client: MoviesCatalogue }) => {
    const movieId = movies[0].id;
    const movie = await client.getById(movieId);

    expect(movie?.id).not.toBeNull();
    expect(movie?.title).not.toBeNull();
    expect(movie?.duration).not.toBeNull();
    expect(movie?.releaseDate).not.toBeNull();
    expect(movie?.posterPath).not.toBeNull();
  });

  it.each`
    client
    ${new HTTPMoviesClient()}
    ${new FakeMoviesClient()}
  `("returns list of popular movies", async ({ client }: { client: MoviesCatalogue }) => {
    const movies = await client.getAll();

    expect(movies).not.toHaveLength(0);
    expect(movies[0].id).not.toBeNull();
    expect(movies[0].title).not.toBeNull();
    expect(movies[0].duration).not.toBeNull();
    expect(movies[0].releaseDate).not.toBeNull();
    expect(movies[0].posterPath).not.toBeNull();
  });
});
