import httpMoviesClient from "@/src/modules/movies/infrastructure/adapters/moviesCatalogue";
import fakeMoviesClient from "@/fakes/modules/movies/infrastructure/adapters/moviesCatalogue";
import MoviesCatalogue from "@/src/modules/movies/application/moviesCatalogue";

describe("Movies catalogue", () => {
  it.each`
    moviesCatalogue
    ${httpMoviesClient}
    ${fakeMoviesClient}
  `("returns list of popular movies", async ({ moviesCatalogue }: { moviesCatalogue: MoviesCatalogue }) => {
    const movies = await moviesCatalogue.getAll();

    expect(movies).not.toHaveLength(0);
    expect(movies[0].id).not.toBeNull();
    expect(movies[0].title).not.toBeNull();
    expect(movies[0].duration).not.toBeNull();
    expect(movies[0].releaseDate).not.toBeNull();
    expect(movies[0].posterPath).not.toBeNull();
  });

  it.each`
    moviesCatalogue
    ${httpMoviesClient}
    ${fakeMoviesClient}
  `("returns a movie by id", async ({ moviesCatalogue }: { moviesCatalogue: MoviesCatalogue }) => {
    const movies = await moviesCatalogue.getAll();
    const movie = await moviesCatalogue.getById(movies[0].id);

    expect(movie?.id).not.toBeNull();
    expect(movie?.title).not.toBeNull();
    expect(movie?.duration).not.toBeNull();
    expect(movie?.releaseDate).not.toBeNull();
    expect(movie?.posterPath).not.toBeNull();
  });
});
